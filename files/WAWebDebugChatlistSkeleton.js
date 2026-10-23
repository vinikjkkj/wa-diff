__d(
  "WAWebDebugChatlistSkeleton",
  ["Promise", "WALogger", "WAWebCmd", "cr:11133", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = null,
      p = null;
    function _() {
      return (r("vulture")("7QLzw8r9PoGzU3TKJ-P7JtjSE7I="), m);
    }
    function f() {
      if (
        (r("vulture")("hgmMmtD4kn-u8jJzI1PlfRCCAlc="),
        (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0)
      ) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "debug: showChatlistSkeleton: skeleton is not enabled, reload with ?gk_enable=wa_web_startup_skeleton",
            ])),
        );
        return;
      }
      o("WALogger").WARN(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "debug: showChatlistSkeleton: only works in dev builds",
          ])),
      );
    }
    ((f.doc =
      "Render the chatlist skeleton until hideChatlistSkeleton is called"),
      (f.paramsToExecute = []));
    function g() {
      r("vulture")("NXup_jHNP8vBs2r6za02uQnpXjw=");
      var e = p;
      ((m = null),
        (p = null),
        e == null || e(),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "debug: hideChatlistSkeleton: revealing chatlist",
            ])),
        ));
    }
    ((g.doc =
      "Reveal the real chatlist after showChatlistSkeleton, exercising the skeleton reveal"),
      (g.paramsToExecute = []),
      (l.getChatlistRowsHold = _),
      (l.showChatlistSkeleton = f),
      (l.hideChatlistSkeleton = g));
  },
  98,
);
