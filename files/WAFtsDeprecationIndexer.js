__d(
  "WAFtsDeprecationIndexer",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E = "deprecatedFTS",
      k = {
        getBacklogged: async function (n) {
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": emptyMessageSource",
                ])),
              E,
            ),
            []
          );
        },
        hasBacklogged: async function () {
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": hasBacklogged",
                ])),
              E,
            ),
            !1
          );
        },
        removeFromBacklog: async function () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": removeFromBacklog",
              ])),
            E,
          );
        },
        getAllAfterId: async function (t, n) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": getAllAfterId",
                ])),
              E,
            ),
            []
          );
        },
        getAll: async function (t) {
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose(["", ": getAll"])),
              E,
            ),
            []
          );
        },
        size: async function () {
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose(["", ": size"])),
              E,
            ),
            0
          );
        },
      },
      I = (function () {
        function e(e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Deprecated Version ",
                  " of FTS is being initialized",
                ])),
              e,
            )
            .tags("fts")
            .sendLogs("fts-deprecated-version-initialized: " + e, {
              sampling: 0.01,
            });
        }
        var t = e.prototype;
        return (
          (t.purge = async function (t) {
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": purge",
                  ])),
                E,
              ),
              !0
            );
          }),
          (t.purgeChat = async function (t) {
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": purgeChat",
                  ])),
                E,
              ),
              !0
            );
          }),
          (t.purge__DEPRECATED_DO_NOT_USE = async function (t, n, r) {
            return (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": purge__DEPRECATED_DO_NOT_USE",
                  ])),
                E,
              ),
              !0
            );
          }),
          (t.search = async function (t, n) {
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": search",
                  ])),
                E,
              ),
              { eof: !0, messages: [], status: 200 }
            );
          }),
          (t.incremental = async function (t) {
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": incremental",
                  ])),
                E,
              ),
              !0
            );
          }),
          (t.full = async function (t, n) {
            return (
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose(["", ": full"])),
                E,
              ),
              [self.performance.now()]
            );
          }),
          (t.getIndexingProgress = function () {
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": getIndexingProgress",
                  ])),
                E,
              ),
              1
            );
          }),
          (t.isFullIndexingPending = function () {
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": isFullIndexingPending",
                  ])),
                E,
              ),
              !1
            );
          }),
          (t.isQueuedIndexingPending = function () {
            return (
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": isQueuedIndexingPending",
                  ])),
                E,
              ),
              !1
            );
          }),
          (t.getMessageSource = function () {
            return (
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": getMessageSource",
                  ])),
                E,
              ),
              k
            );
          }),
          (t.eraseIndex = async function () {
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": eraseIndex",
                ])),
              E,
            );
          }),
          e
        );
      })();
    l.default = I;
  },
  98,
);
