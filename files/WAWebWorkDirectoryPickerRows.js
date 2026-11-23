__d(
  "WAWebWorkDirectoryPickerRows",
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
              itemKey: "work-directory-header",
              kind: "header",
              type: o("WAWebMultiSelectChatListTypes").WorkDirectoryRow
                .ROW_WORK_DIRECTORY_STATUS,
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
                itemKey: "work-directory-loading",
                kind: "loading",
                type: o("WAWebMultiSelectChatListTypes").WorkDirectoryRow
                  .ROW_WORK_DIRECTORY_STATUS,
              },
            ]
          : n === "error"
            ? [
                {
                  height: s,
                  itemKey: "work-directory-error",
                  kind: "error",
                  type: o("WAWebMultiSelectChatListTypes").WorkDirectoryRow
                    .ROW_WORK_DIRECTORY_STATUS,
                },
              ]
            : n === "ready"
              ? t.map(function (e) {
                  return {
                    data: e,
                    itemKey: "work-directory-contact-" + e.id,
                    type: o("WAWebMultiSelectChatListTypes").WorkDirectoryRow
                      .ROW_WORK_DIRECTORY_CONTACT,
                  };
                })
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n,
                  );
                })();
    }
    ((l.WORK_DIRECTORY_LOADING_ROW_HEIGHT = e),
      (l.WORK_DIRECTORY_ERROR_ROW_HEIGHT = s),
      (l.toWorkDirectoryPickerRows = u));
  },
  98,
);
