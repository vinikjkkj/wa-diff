__d(
  "createEmptyCometComposerViewState",
  ["gkx", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("20836");
    function s(t, n, o) {
      return t != null
        ? t
        : e
          ? { audience: {}, creationSessionID: o != null ? o : r("uuidv4")() }
          : {
              audience: {},
              creationSessionID: o != null ? o : r("uuidv4")(),
              editorState: babelHelpers.extends(
                {
                  __type: "plain-text",
                  hasFocus: !1,
                  isComposing: !1,
                  isPendingSelection: !1,
                  selectionOffsets: null,
                  text: "",
                },
                n,
              ),
            };
    }
    l.default = s;
  },
  98,
);
