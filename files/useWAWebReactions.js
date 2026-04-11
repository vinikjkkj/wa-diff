__d(
  "useWAWebReactions",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebReactionsCollection",
    "WAWebReactionsUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
    "useWAWebStableArrayModelState",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState;
    function f(t, a, i) {
      var l = r("useWAWebStableArrayModelState")(),
        u = l[0],
        c = l[1],
        f = _([]),
        g = f[0],
        h = f[1],
        y = _(0),
        C = y[0],
        b = y[1],
        v = r("useWAWebStableCallback")(a),
        S = p(!0),
        R = d(function (e) {
          var t = o("WAWebReactionsUtils").getReactionEmojisAndSum(e);
          (h(t.reactionArrayEmojis), b(t.numberOfSenderReactions));
        }, []),
        L = t == null ? void 0 : t.join("-"),
        E = p();
      return (
        m(
          function () {
            var r = E.current;
            E.current = i;
            var a = !1;
            return (
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (
                  t &&
                  !(
                    r == null &&
                    i === !1 &&
                    o("WAWebABProps").getABPropConfigValue(
                      "wa_web_reduce_cascading_updates_chat_open",
                    )
                  )
                ) {
                  var l = [],
                    u = t.map(function (t) {
                      return o("WAWebReactionsCollection")
                        .ReactionsCollection.find(t)
                        .then(function (e) {
                          e != null && l.push(e);
                        })
                        .catch(function (t) {
                          o("WALogger").WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Could not get reactions for message: ",
                                "",
                              ])),
                            t,
                          );
                        });
                    });
                  if ((yield (s || (s = n("Promise"))).all(u), !a)) {
                    if (
                      !o("WAWebABProps").getABPropConfigValue(
                        "wa_web_reduce_cascading_updates_chat_open",
                      )
                    ) {
                      c(l);
                      var d =
                        r == null &&
                        !l.some(function (e) {
                          return e.reactions.length > 0;
                        });
                      r !== !1 && !d && (R(l), v(l));
                      return;
                    }
                    (r === !1 && (S.current = !1), c(l), R(l), v(l));
                  }
                }
              })(),
              function () {
                a = !0;
              }
            );
          },
          [L, R, i],
        ),
        o("useWAWebListener").useListeners(
          u.map(function (e) {
            var t = e.reactions;
            return {
              source: t,
              eventOrEvents: "add reset change:senders",
              callback: function () {
                ((S.current = !1), R(u), v(u));
              },
            };
          }),
        ),
        o("useWAWebListener").useListeners(
          u.map(function (e) {
            var t = e.reactions;
            return {
              source: t,
              eventOrEvents: "remove",
              callback: function () {
                (R(u), i === void 0 && v(u));
              },
            };
          }),
        ),
        {
          reactionArrayEmojis: g,
          numberOfSenderReactions: C,
          reactionsModels: u,
          isFirstData: S.current,
        }
      );
    }
    l.default = f;
  },
  98,
);
