__d(
  "WAWebWorkDirectorySearchRows",
  ["WAWebChatlistTypes", "WAWebWorkDirectoryPickerRows"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return t === "hidden"
        ? []
        : t === "loading"
          ? [
              {
                height: o("WAWebWorkDirectoryPickerRows")
                  .WORK_DIRECTORY_LOADING_ROW_HEIGHT,
                itemKey: "work-directory-loading",
                type: o("WAWebChatlistTypes").WAWebChatlistRow
                  .ROW_WORK_DIRECTORY_LOADING,
              },
            ]
          : t === "error"
            ? [
                {
                  height: o("WAWebWorkDirectoryPickerRows")
                    .WORK_DIRECTORY_ERROR_ROW_HEIGHT,
                  itemKey: "work-directory-error",
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_WORK_DIRECTORY_ERROR,
                },
              ]
            : t === "ready"
              ? e.map(function (e) {
                  return {
                    data: e,
                    itemKey: "work-directory-contact-" + e.id,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_WORK_DIRECTORY_CONTACT,
                  };
                })
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    l.toWorkDirectorySearchRows = e;
  },
  98,
);
