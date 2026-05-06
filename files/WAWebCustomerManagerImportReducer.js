__d(
  "WAWebCustomerManagerImportReducer",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = e.findIndex(function (e) {
        return e.rowIndex > n;
      });
      return r === -1
        ? [].concat(e, [t])
        : [].concat(e.slice(0, r), [t], e.slice(r));
    }
    function l(e, t, n) {
      var r = e.findIndex(function (e) {
        return e.rowIndex > n;
      });
      return r === -1
        ? [].concat(e, [t])
        : [].concat(e.slice(0, r), [t], e.slice(r));
    }
    function s(t, n) {
      switch (n.type) {
        case "DELETE_CONTACT": {
          var r = n.payload.contact.rowIndex;
          return babelHelpers.extends({}, t, {
            validContactsData: t.validContactsData.filter(function (e) {
              return e.rowIndex !== r;
            }),
          });
        }
        case "DELETE_ERROR_ITEM": {
          var o = n.payload.errorItem.rowIndex;
          return babelHelpers.extends({}, t, {
            errorList: t.errorList.filter(function (e) {
              return e.rowIndex !== o;
            }),
          });
        }
        case "DELETE_ALL_ERROR_ITEMS":
          return babelHelpers.extends({}, t, { errorList: [] });
        case "UNDO_DELETE_ALL_ERROR_ITEMS":
          return babelHelpers.extends({}, t, {
            errorList: n.payload.originalErrorList,
          });
        case "UNDO_DELETE_ERROR_ITEM":
          return babelHelpers.extends({}, t, {
            errorList: l(
              t.errorList,
              n.payload.originalErrorItem,
              n.payload.originalIndex,
            ),
          });
        case "UNDO_DELETE_CONTACT":
          return babelHelpers.extends({}, t, {
            validContactsData: e(
              t.validContactsData,
              n.payload.originalContact,
              n.payload.originalIndex,
            ),
          });
        default:
          return t;
      }
    }
    i.reducer = s;
  },
  66,
);
