__d(
  "WAWebWODirectorySearchRows",
  ["WAWebChatlistTypes", "WAWebWODirectoryPickerRows"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return t === "hidden"
        ? []
        : t === "loading"
          ? [
              {
                height: o("WAWebWODirectoryPickerRows")
                  .WO_DIRECTORY_LOADING_ROW_HEIGHT,
                itemKey: "wo-directory-loading",
                type: o("WAWebChatlistTypes").WAWebChatlistRow
                  .ROW_WO_DIRECTORY_LOADING,
              },
            ]
          : t === "error"
            ? [
                {
                  height: o("WAWebWODirectoryPickerRows")
                    .WO_DIRECTORY_ERROR_ROW_HEIGHT,
                  itemKey: "wo-directory-error",
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_WO_DIRECTORY_ERROR,
                },
              ]
            : t === "ready"
              ? e.map(function (e) {
                  return {
                    data: e,
                    itemKey: "wo-directory-contact-" + e.id,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_WO_DIRECTORY_CONTACT,
                  };
                })
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    l.toWODirectorySearchRows = e;
  },
  98,
);
