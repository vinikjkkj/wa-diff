__d(
  "WAWebOpenChatFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBizGetWidFromPathCustomUrlAction",
    "WAWebBotProfileCollection",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactSyncLogger",
    "WAWebDeepLinkClickWamEvent",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebLinkify",
    "WAWebNoop",
    "WAWebQueryExistsJob",
    "WAWebSpinner.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlow",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = 250,
      g = 500,
      h = new Map();
    function y() {
      h.clear();
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser()) return e;
          var t = h.get(e.user);
          if (t) return t;
          var n = yield o("WAWebQueryExistsJob").queryWidExists(
              e,
              o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEEPLINK,
            ),
            r = n == null ? e : n.wid;
          return (h.set(e.user, r), r);
        })),
        b.apply(this, arguments)
      );
    }
    var v = n("$InternalEnum").Mirrored([
      "Confirm",
      "Error",
      "UsernameNotFoundError",
    ]);
    function S(t) {
      var a = o("useWAWebFlow").useFlow(),
        i = a[0],
        l = a[1],
        c = _(),
        m = (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = t.target,
              r = n.customUrl,
              a = n.username,
              i = n.usernameKey,
              l = n.wid;
            if (l != null) return { wid: l, widLookupMethod: "directWid" };
            if (r != null) {
              var s = yield o(
                "WAWebBizGetWidFromPathCustomUrlAction",
              ).getWidfromPath(r);
              if (s) return { wid: s, widLookupMethod: "customUrl" };
            }
            if (
              a != null &&
              o("WAWebUsernameGatingUtils").usernameSearchEnabled()
            ) {
              var u = yield o("WAWebQueryExistsJob").queryUsernameExists(
                  a,
                  i,
                  o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CHAT_OPEN,
                ),
                c = (u == null ? void 0 : u.keyRequired) === !0;
              t.deepLinkLoggingData != null &&
                new (o("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)(
                  babelHelpers.extends({}, t.deepLinkLoggingData, {
                    deepLinkRequirePinEntry: c,
                  }),
                ).commit();
              var d;
              if (
                (c
                  ? (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "OpenChatFlow: username query returned keyRequired",
                        ])),
                    ),
                    (d = yield o(
                      "WAWebUsernameKeyVerificationFlow",
                    ).usernameKeyVerificationFlow({
                      username: a,
                      initWithError: i != null,
                    })))
                  : (d = u == null ? void 0 : u.wid),
                d != null)
              )
                return { wid: d, widLookupMethod: "username" };
            }
          });
          return function () {
            return r.apply(this, arguments);
          };
        })(),
        h = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = t.ctwaContextLinkData,
              r = t.msgText,
              a = t.clearPreviousText,
              i = a === void 0 ? !1 : a;
            if (n) {
              var l = o("WAWebLinkify").findLink(
                  n.sourceUrl || "",
                  !1,
                  o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                ),
                s =
                  (l == null ? void 0 : l.suspiciousCharacters) != null &&
                  l.suspiciousCharacters.size > 0;
              s && (n = void 0);
            }
            (n && (r = n.icebreaker),
              e.active && r != null && r !== ""
                ? (i &&
                    o(
                      "WAWebComposeBoxActions",
                    ).ComposeBoxActions.setTextContent(e, ""),
                  o("WAWebComposeBoxActions").ComposeBoxActions.paste(e, r),
                  n &&
                    o(
                      "WAWebComposeBoxActions",
                    ).ComposeBoxActions.setCtwaContextLinkData(e, n))
                : (i && e.setComposeContents({ text: "" }),
                  r != null &&
                    r !== "" &&
                    e.setComposeContents({
                      text: r,
                      timestamp: o("WATimeUtils").unixTime(),
                    }),
                  yield o("WAWebCmd")
                    .Cmd.openChatFromUnread({ chat: e })
                    .then(function (t) {
                      t &&
                        (o("WAWebComposeBoxActions").ComposeBoxActions.focus(e),
                        n &&
                          o(
                            "WAWebComposeBoxActions",
                          ).ComposeBoxActions.setCtwaContextLinkData(e, n));
                    })),
              t.sendLogAttributes != null &&
                o(
                  "WAWebComposeBoxActions",
                ).ComposeBoxActions.addMsgSendingLogAttributes(
                  e,
                  t.sendLogAttributes,
                ));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        y = function () {
          l.push(v.Error);
        },
        b = function () {
          var e;
          ((e = c.current) == null || e.controller.abort(),
            (c.current = void 0),
            l.end());
        };
      if (
        (p(function () {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = !1,
                a = new AbortController();
              o("WAPromiseDelays")
                .delayMs(f)
                .then(function () {
                  if (a.signal.aborted)
                    throw new (o("WAAbortError").AbortError)();
                  ((e = !0), l.push(v.Confirm));
                })
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
              var i = Date.now(),
                s = new AbortController(),
                d = s.signal,
                p = yield m();
              if (p == null) {
                var _ = t.target,
                  b = _.fallbackUrl,
                  S = _.username;
                if (
                  S != null &&
                  o("WAWebUsernameGatingUtils").usernameSearchEnabled()
                ) {
                  (a.abort(), l.push(v.UsernameNotFoundError));
                  return;
                }
                if (b != null) {
                  (o("WAWebExternalLink.react").openExternalLink(b), l.end());
                  return;
                }
                (o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "OpenChatFlow chat open was no-op from provided props.",
                    ])),
                ),
                  l.end());
                return;
              }
              var R = C(p.wid)
                .then(function (e) {
                  var t,
                    n =
                      (t = o(
                        "WAWebBotProfileCollection",
                      ).BotProfileCollection.getDefaultBot()) == null
                        ? void 0
                        : t.id;
                  if (e.isBot() && (n == null || !n.equals(e)))
                    throw r("err")("invalid bot chat");
                  return o("WAWebFindChatAction").findOrCreateLatestChat(
                    e,
                    "debugOpenChatFlow",
                    { forceUsync: !0 },
                  );
                })
                .then(
                  (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        if (d.aborted)
                          throw new (o("WAAbortError").AbortError)();
                        e || a.abort();
                        var r = Date.now() - i,
                          s = e ? Math.max(g + f - r, 0) : 0;
                        (yield h(n.chat),
                          yield o("WAPromiseDelays").delayMs(s),
                          l.end(),
                          t.onSuccess(
                            babelHelpers.extends({}, n, {
                              widLookupMethod: p.widLookupMethod,
                            }),
                          ));
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (e) {
                  (a.abort(), t.onError == null || t.onError(e), y());
                });
              c.current = { controller: s, promise: R };
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e().catch(r("WAWebNoop"));
        }, []),
        l.step == null)
      )
        return null;
      var S = null;
      switch (l.step) {
        case v.Confirm:
          S = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            title: s._(/*BTDS*/ "Starting chat"),
            onCancel: b,
            cancelText: s._(/*BTDS*/ "Cancel"),
            tsNavigationData: {
              surface: "unknown",
              viewName: "open-chat-starting",
            },
            children: d.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              children: d.jsx(o("WAWebSpinner.react").Spinner, {
                stroke: 6,
                size: 24,
              }),
            }),
          });
          break;
        case v.Error:
          if (t.customError != null) S = t.customError;
          else {
            var R = t.target.wid,
              L = o("WAWebWidFormat").widToFormattedUser(R);
            S = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: function () {
                return l.end();
              },
              okText: r("WAWebFbtCommon")("OK"),
              tsNavigationData: {
                surface: "unknown",
                viewName: "open-chat-not-found",
              },
              children: s._(
                /*BTDS*/ "The number {formattedNumber} isn't on WhatsApp.",
                [s._param("formattedNumber", L)],
              ),
            });
          }
          break;
        case v.UsernameNotFoundError: {
          var E = t.target.username;
          S = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: function () {
              return l.end();
            },
            okText: r("WAWebFbtCommon")("OK"),
            tsNavigationData: {
              surface: "unknown",
              viewName: "open-chat-username-not-found",
            },
            children: s._(
              /*BTDS*/ "The username \u0040{username} isn't on WhatsApp.",
              [s._param("username", E)],
            ),
          });
          break;
        }
      }
      return d.jsx(i, { flow: l, children: S });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.clearChatIdCorrectionCache = y),
      (l.OpenChatFlow = S));
  },
  226,
);
