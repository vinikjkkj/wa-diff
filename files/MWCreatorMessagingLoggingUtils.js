__d(
  "MWCreatorMessagingLoggingUtils",
  [
    "I64",
    "LSAuthorityLevel",
    "MWPActor.react",
    "MessagingThreadSubtype",
    "QPLUserFlow",
    "ReQL",
    "WAHashStringToNumber",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useAsyncReStore",
    "useOnFirstImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useRef,
      m = function (t) {
        if (!o("MWPActor.react").isAPPlus() || t.threadSubtype == null)
          return !1;
        var e = (s || (s = o("I64"))).to_float(t.threadSubtype);
        return (
          e === r("MessagingThreadSubtype").PAGE_TO_USER ||
          e === r("MessagingThreadSubtype").PAGE_TO_PAGE
        );
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              o("MWPActor.react").isAPPlus() &&
                (r("QPLUserFlow").start(r("qpl")._(421081035, "621"), {
                  instanceKey: o("WAHashStringToNumber").hashStringToNumber(e),
                }),
                r("QPLUserFlow").endSuccess(r("qpl")._(421081035, "621"), {
                  instanceKey: o("WAHashStringToNumber").hashStringToNumber(e),
                }));
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        o("useOnFirstImpression").useOnFirstImpression(n)
      );
    }
    function _(e, t) {
      o("MWPActor.react").isAPPlus() &&
        r("QPLUserFlow").start(r("qpl")._(421077156, "777"), {
          annotations: { string: { messagingEntrypoint: t } },
          instanceKey: o("WAHashStringToNumber").hashStringToNumber(e),
        });
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              o("MWPActor.react").isAPPlus() &&
                r("QPLUserFlow").endSuccess(r("qpl")._(421070127, "2494"), {
                  instanceKey: o("WAHashStringToNumber").hashStringToNumber(
                    (s || (s = o("I64"))).to_string(e),
                  ),
                });
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        o("useOnFirstImpression").useOnFirstImpression(n)
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t = r("useAsyncReStore")(),
        n = d(null),
        a;
      return (
        e[0] !== t
          ? ((a = function (a) {
              m(a) &&
                (r("QPLUserFlow").start(r("qpl")._(421082877, "916"), {
                  instanceKey: o("WAHashStringToNumber").hashStringToNumber(
                    (s || (s = o("I64"))).to_string(a.threadKey),
                  ),
                }),
                t.then(function (e) {
                  n.current = o("ReQL")
                    .fromTableDescending(e.tables.messages)
                    .subscribe(function (e, t) {
                      if (t.operation === "add" || t.operation === "put") {
                        var i = t.value,
                          l =
                            (s || (s = o("I64"))).to_int32(i.authorityLevel) >=
                            r("LSAuthorityLevel").SERVER_PARTIAL,
                          u = s.equal(i.threadKey, a.threadKey);
                        if (l && u) {
                          var c = (s || (s = o("I64"))).to_float(
                            i.sendStatusV2,
                          );
                          (c === 4 || c === 5
                            ? r("QPLUserFlow").endFailure(
                                r("qpl")._(421082877, "916"),
                                "message_send_error",
                                {
                                  instanceKey: o(
                                    "WAHashStringToNumber",
                                  ).hashStringToNumber(
                                    (s || (s = o("I64"))).to_string(
                                      a.threadKey,
                                    ),
                                  ),
                                },
                              )
                            : r("QPLUserFlow").endSuccess(
                                r("qpl")._(421082877, "916"),
                                {
                                  instanceKey: o(
                                    "WAHashStringToNumber",
                                  ).hashStringToNumber(
                                    (s || (s = o("I64"))).to_string(
                                      a.threadKey,
                                    ),
                                  ),
                                },
                              ),
                            n.current == null || n.current());
                        }
                      }
                    });
                }));
            }),
            (e[0] = t),
            (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    ((l.useLogOnMessageButtonImpression = p),
      (l.logOnMessageButtonClick = _),
      (l.useLogOnThreadViewImpression = f),
      (l.useLogOnMessageSend = g));
  },
  98,
);
