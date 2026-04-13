__d(
  "WAWebVersionInfo.react",
  [
    "fbt",
    "WAWebBuildConstants",
    "WAWebCopyPasteSelectable.react",
    "WAWebHistorySyncLidChatGating",
    "WAWebLid1X1MigrationGating",
    "WAWebPrimaryVersion",
    "WAWebUserPrefsMeUser",
    "cr:21012",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p() {
      var e = o("react-compiler-runtime").c(22),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]);
      var n = m(t),
        a = n[0],
        i = n[1],
        l = void 0,
        c = void 0,
        p = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        _ = p[0];
      if (!r("gkx")("26258") && a != null) {
        var f;
        (e[1] !== a
          ? ((f = u.jsxs("span", {
              dir: "LTR",
              children: ["Primary app version: ", a],
            })),
            (e[1] = a),
            (e[2] = f))
          : (f = e[2]),
          (l = f));
      }
      if (!r("gkx")("26258")) {
        var g, h;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
          var y = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
            C = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          ((g = u.jsx("div", {
            children: u.jsxs("span", {
              dir: "LTR",
              children: [
                "Phone Number: ",
                y == null ? void 0 : y.user,
                " - LID:",
                C == null ? void 0 : C.user,
              ],
            }),
          })),
            (h = u.jsx("div", {
              children: u.jsxs("span", {
                dir: "LTR",
                children: [
                  "Companion device ID: ",
                  y == null ? void 0 : y.getDeviceId(),
                ],
              }),
            })),
            (e[3] = g),
            (e[4] = h));
        } else ((g = e[3]), (h = e[4]));
        var b;
        e[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = u.jsx("div", {
              children: u.jsxs("span", {
                dir: "LTR",
                children: [
                  "Chat DB Lid migrated:",
                  " ",
                  o("WAWebLid1X1MigrationGating")
                    .Lid1X1MigrationUtils.isLidMigrated()
                    .toString(),
                ],
              }),
            })),
            (e[5] = b))
          : (b = e[5]);
        var v;
        (e[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = u.jsxs(u.Fragment, {
              children: [
                g,
                h,
                b,
                u.jsx("div", {
                  children: u.jsxs("span", {
                    dir: "LTR",
                    children: [
                      "History LID session: ",
                      o("WAWebHistorySyncLidChatGating")
                        .isForcedHistoryLidChat()
                        .toString(),
                    ],
                  }),
                }),
              ],
            })),
            (e[6] = v))
          : (v = e[6]),
          (c = v));
      }
      var S, R;
      (e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            r("gkx")("26258") ||
              o("WAWebPrimaryVersion")
                .getPrimaryCurrentVersion()
                .then(function (e) {
                  i(e);
                });
          }),
          (R = []),
          (e[7] = S),
          (e[8] = R))
        : ((S = e[7]), (R = e[8])),
        d(S, R));
      var L;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsxs(u.Fragment, {
            children: [
              s._(/*BTDS*/ "Version {version}", [s._param("version", "")]),
              u.jsx("span", {
                dir: "LTR",
                children: o("WAWebBuildConstants").VERSION_STR,
              }),
            ],
          })),
          (e[9] = L))
        : (L = e[9]);
      var E = L,
        k,
        I;
      if (!r("gkx")("26258")) {
        var T;
        (e[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = u.jsxs("span", {
              children: ["Version: ", o("WAWebBuildConstants").VERSION_STR],
            })),
            (e[10] = T))
          : (T = e[10]),
          (E = T),
          (k = "React Compiler: " + (r("gkx")("7685") ? "forget" : "classic")));
      }
      var D;
      e[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = "xamitd3 x1f6kntn x1fc57z9 xhslqc4 x2b8uid"), (e[11] = D))
        : (D = e[11]);
      var x;
      e[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx("div", { children: c })), (e[12] = x))
        : (x = e[12]);
      var $;
      e[13] !== _
        ? (($ = _
            ? u.jsx("div", { children: s._(/*BTDS*/ "(joined beta)") })
            : null),
          (e[13] = _),
          (e[14] = $))
        : ($ = e[14]);
      var P;
      e[15] !== l
        ? ((P = u.jsx("div", { children: l })), (e[15] = l), (e[16] = P))
        : (P = e[16]);
      var N, M;
      e[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = u.jsx("div", { children: k })),
          (M = u.jsx("div", { children: I })),
          (e[17] = N),
          (e[18] = M))
        : ((N = e[17]), (M = e[18]));
      var w;
      return (
        e[19] !== $ || e[20] !== P
          ? ((w = u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
              "data-testid": void 0,
              className: D,
              selectable: !0,
              children: [E, x, $, P, N, M],
            })),
            (e[19] = $),
            (e[20] = P),
            (e[21] = w))
          : (w = e[21]),
        w
      );
    }
    l.default = p;
  },
  226,
);
