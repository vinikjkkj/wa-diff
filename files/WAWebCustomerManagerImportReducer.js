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
      e: {
        var r = n;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "DELETE_CONTACT" &&
          "payload" in r
        ) {
          var o = r.payload,
            a = o.contact.rowIndex;
          return babelHelpers.extends({}, t, {
            validContactsData: t.validContactsData.filter(function (e) {
              return e.rowIndex !== a;
            }),
          });
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "DELETE_ERROR_ITEM" &&
          "payload" in r
        ) {
          var i = r.payload,
            s = i.errorItem.rowIndex;
          return babelHelpers.extends({}, t, {
            errorList: t.errorList.filter(function (e) {
              return e.rowIndex !== s;
            }),
          });
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "DELETE_ALL_ERROR_ITEMS"
        )
          return babelHelpers.extends({}, t, { errorList: [] });
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "UNDO_DELETE_ALL_ERROR_ITEMS" &&
          "payload" in r
        ) {
          var u = r.payload;
          return babelHelpers.extends({}, t, {
            errorList: u.originalErrorList,
          });
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "UNDO_DELETE_ERROR_ITEM" &&
          "payload" in r
        ) {
          var c = r.payload;
          return babelHelpers.extends({}, t, {
            errorList: l(t.errorList, c.originalErrorItem, c.originalIndex),
          });
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "UNDO_DELETE_CONTACT" &&
          "payload" in r
        ) {
          var d = r.payload;
          return babelHelpers.extends({}, t, {
            validContactsData: e(
              t.validContactsData,
              d.originalContact,
              d.originalIndex,
            ),
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    i.reducer = s;
  },
  66,
);
