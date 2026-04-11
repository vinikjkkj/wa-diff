__d(
  "WAWebBizBroadcastsDrawerReducer",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
      e: {
        var e = n;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "COMPLETE_PROCESSING" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "errorList" in e.payload &&
          "validContactsData" in e.payload
        ) {
          var r = e.payload.errorList,
            o = e.payload.validContactsData;
          return babelHelpers.extends({}, t, {
            errorList: r,
            validContactsData: o,
          });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "DELETE_CONTACT" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "contact" in e.payload
        ) {
          var a = e.payload.contact;
          return babelHelpers.extends({}, t, {
            validContactsData: t.validContactsData.filter(function (e) {
              return e !== a;
            }),
          });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "DELETE_ERROR_ITEM" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "errorItem" in e.payload
        ) {
          var i = e.payload.errorItem;
          return babelHelpers.extends({}, t, {
            errorList: t.errorList.filter(function (e) {
              return e !== i;
            }),
          });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "DELETE_ALL_ERROR_ITEMS"
        )
          return babelHelpers.extends({}, t, { errorList: [] });
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "SAVE_EDITED_CONTACT" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "editedContact" in e.payload &&
          "originalIndex" in e.payload
        ) {
          var l = e.payload.editedContact,
            s = e.payload.originalIndex,
            u = [l].concat(t.validContactsData),
            c = t.errorList.filter(function (e, t) {
              return t !== s;
            });
          return babelHelpers.extends({}, t, {
            errorList: c,
            validContactsData: u,
          });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "UNDO_DELETE_ALL_ERROR_ITEMS" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "originalErrorList" in e.payload
        ) {
          var d = e.payload.originalErrorList;
          return babelHelpers.extends({}, t, { errorList: d });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "UNDO_DELETE_ERROR_ITEM" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "originalErrorItem" in e.payload &&
          "originalIndex" in e.payload
        ) {
          var m = e.payload.originalErrorItem,
            p = e.payload.originalIndex,
            _ = t.errorList.findIndex(function (e) {
              return e.rowIndex > p;
            }),
            f =
              _ === -1
                ? [].concat(t.errorList, [m])
                : [].concat(t.errorList.slice(0, _), [m], t.errorList.slice(_));
          return babelHelpers.extends({}, t, { errorList: f });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "UNDO_DELETE_CONTACT" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "originalContact" in e.payload &&
          "originalIndex" in e.payload
        ) {
          var g = e.payload.originalContact,
            h = e.payload.originalIndex,
            y = t.validContactsData.findIndex(function (e) {
              return e.rowIndex > h;
            }),
            C =
              y === -1
                ? [].concat(t.validContactsData, [g])
                : [].concat(
                    t.validContactsData.slice(0, y),
                    [g],
                    t.validContactsData.slice(y),
                  );
          return babelHelpers.extends({}, t, { validContactsData: C });
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "UNDO_SAVE_EDITED_CONTACT" &&
          ((typeof e.payload == "object" && e.payload !== null) ||
            typeof e.payload == "function") &&
          "newIndex" in e.payload &&
          "originalErrorContact" in e.payload &&
          "originalIndex" in e.payload
        ) {
          var b = e.payload.newIndex,
            v = e.payload.originalErrorContact,
            S = e.payload.originalIndex,
            R = t.errorList.findIndex(function (e) {
              return e.rowIndex > S;
            }),
            L =
              R === -1
                ? [].concat(t.errorList, [v])
                : [].concat(t.errorList.slice(0, R), [v], t.errorList.slice(R)),
            E = t.validContactsData.filter(function (e) {
              return e.rowIndex !== b;
            });
          return babelHelpers.extends({}, t, {
            errorList: L,
            validContactsData: E,
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    };
    i.reducer = e;
  },
  66,
);
