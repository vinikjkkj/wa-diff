__d(
  "WAWebWODirectoryPickerRows",
  ["WAWebMultiSelectChatListTypes"],
  function (t, n, r, o, a, i, l) {
    var e = 40,
      s = 64;
    function u(e, t) {
      var n = c(e, t);
      return n.length === 0
        ? []
        : [
            {
              itemKey: "wo-directory-header",
              kind: "header",
              type: o("WAWebMultiSelectChatListTypes").WODirectoryRow
                .ROW_WO_DIRECTORY_STATUS,
            },
          ].concat(n);
    }
    function c(t, n) {
      return n === "hidden"
        ? []
        : n === "loading"
          ? [
              {
                height: e,
                itemKey: "wo-directory-loading",
                kind: "loading",
                type: o("WAWebMultiSelectChatListTypes").WODirectoryRow
                  .ROW_WO_DIRECTORY_STATUS,
              },
            ]
          : n === "error"
            ? [
                {
                  height: s,
                  itemKey: "wo-directory-error",
                  kind: "error",
                  type: o("WAWebMultiSelectChatListTypes").WODirectoryRow
                    .ROW_WO_DIRECTORY_STATUS,
                },
              ]
            : n === "ready"
              ? t.map(function (e) {
                  return {
                    data: e,
                    itemKey: "wo-directory-contact-" + e.id,
                    type: o("WAWebMultiSelectChatListTypes").WODirectoryRow
                      .ROW_WO_DIRECTORY_CONTACT,
                  };
                })
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n,
                  );
                })();
    }
    ((l.WO_DIRECTORY_LOADING_ROW_HEIGHT = e),
      (l.WO_DIRECTORY_ERROR_ROW_HEIGHT = s),
      (l.toWODirectoryPickerRows = u));
  },
  98,
);
