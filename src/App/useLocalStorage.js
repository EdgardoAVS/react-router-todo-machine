import React, { useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { error, sincronizedItem, loading, item } = state;

  // ACTION CREATORS
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onSuccess = (parsedItem) => {
    dispatch({ type: actionTypes.success, payload: parsedItem });
  };
  const onSave = (item) => {
    dispatch({ type: actionTypes.save, payload: item });
  };
  const onSincronize = () => {
    dispatch({ type: actionTypes.sincronize });
  };

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizeItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
