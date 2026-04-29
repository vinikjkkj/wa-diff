__d(
  "WAWebBizBroadcastsDrawerReducer",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "COMPLETE_PROCESSING" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "errorList" in n.payload &&
          "validContactsData" in n.payload
        ) {
          var r = n.payload.errorList,
            o = n.payload.validContactsData;
          return babelHelpers.extends({}, e, {
            errorList: r,
            validContactsData: o,
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "DELETE_CONTACT" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "contact" in n.payload
        ) {
          var a = n.payload.contact;
          return babelHelpers.extends({}, e, {
            validContactsData: e.validContactsData.filter(function (e) {
              return e !== a;
            }),
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "DELETE_ERROR_ITEM" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "errorItem" in n.payload
        ) {
          var i = n.payload.errorItem;
          return babelHelpers.extends({}, e, {
            errorList: e.errorList.filter(function (e) {
              return e !== i;
            }),
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "DELETE_ALL_ERROR_ITEMS"
        )
          return babelHelpers.extends({}, e, { errorList: [] });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "SAVE_EDITED_CONTACT" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "editedContact" in n.payload &&
          "originalIndex" in n.payload
        ) {
          var l = n.payload.editedContact,
            s = n.payload.originalIndex,
            u = [l].concat(e.validContactsData),
            c = e.errorList.filter(function (e, t) {
              return t !== s;
            });
          return babelHelpers.extends({}, e, {
            errorList: c,
            validContactsData: u,
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "UNDO_DELETE_ALL_ERROR_ITEMS" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "originalErrorList" in n.payload
        ) {
          var d = n.payload.originalErrorList;
          return babelHelpers.extends({}, e, { errorList: d });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "UNDO_DELETE_ERROR_ITEM" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "originalErrorItem" in n.payload &&
          "originalIndex" in n.payload
        ) {
          var m = n.payload.originalErrorItem,
            p = n.payload.originalIndex,
            _ = e.errorList.findIndex(function (e) {
              return e.rowIndex > p;
            }),
            f =
              _ === -1
                ? [].concat(e.errorList, [m])
                : [].concat(e.errorList.slice(0, _), [m], e.errorList.slice(_));
          return babelHelpers.extends({}, e, { errorList: f });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "UNDO_DELETE_CONTACT" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "originalContact" in n.payload &&
          "originalIndex" in n.payload
        ) {
          var g = n.payload.originalContact,
            h = n.payload.originalIndex,
            y = e.validContactsData.findIndex(function (e) {
              return e.rowIndex > h;
            }),
            C =
              y === -1
                ? [].concat(e.validContactsData, [g])
                : [].concat(
                    e.validContactsData.slice(0, y),
                    [g],
                    e.validContactsData.slice(y),
                  );
          return babelHelpers.extends({}, e, { validContactsData: C });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "UNDO_SAVE_EDITED_CONTACT" &&
          ((typeof n.payload == "object" && n.payload !== null) ||
            typeof n.payload == "function") &&
          "newIndex" in n.payload &&
          "originalErrorContact" in n.payload &&
          "originalIndex" in n.payload
        ) {
          var b = n.payload.newIndex,
            v = n.payload.originalErrorContact,
            S = n.payload.originalIndex,
            R = e.errorList.findIndex(function (e) {
              return e.rowIndex > S;
            }),
            L =
              R === -1
                ? [].concat(e.errorList, [v])
                : [].concat(e.errorList.slice(0, R), [v], e.errorList.slice(R)),
            E = e.validContactsData.filter(function (e) {
              return e.rowIndex !== b;
            });
          return babelHelpers.extends({}, e, {
            errorList: L,
            validContactsData: E,
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    i.reducer = e;
  },
  66,
);
