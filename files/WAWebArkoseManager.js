__d(
  "WAWebArkoseManager",
  [
    "SecureMessageListener",
    "SecurePostMessage",
    "WALogger",
    "WAWebArkoseExpUtils",
    "WAWebWebArkoseTokenWamEvent",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      E,
      k,
      I,
      T,
      D,
      x,
      $ = {
        publicKey: r("gkx")("26258")
          ? "BB073E43-7F89-42BA-A162-8BB05F982ED9"
          : "77677C30-EC99-4608-90A9-D46B2A98A418",
      },
      P = "https://iframe.arkoselabs.com",
      N = (function () {
        function t() {
          ((this.isInitialized = !1),
            (this.isIframeLoaded = !1),
            (this.isIframeLoading = !1),
            (this.iframeElement = null),
            (this.iframeId = "arkose-global-iframe-id"),
            (this.config = null),
            (this.pendingTriggers = []),
            (this.currentTriggerContext = null),
            (this.mdSessionId = null),
            (this.mdClientSessionId = null),
            (this.secureMessageListener = null));
        }
        var n = t.prototype;
        return (
          (n.$1 = function () {
            return o("WAWebArkoseExpUtils").isArkoseAllowedToRun();
          }),
          (n.initialize = async function (n) {
            if (this.$1()) {
              if (this.isInitialized) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Arkose] Manager already initialized",
                    ])),
                );
                return;
              }
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Arkose] Initializing Arkose manager..",
                  ])),
              );
              var t = n != null ? n : {},
                r = t.config;
              ((this.config = r != null ? r : $),
                await this.loadIframe(),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[Arkose] Arkose manager initialized",
                    ])),
                ));
            }
          }),
          (n.loadIframe = async function () {
            var e = this;
            if (
              !(this.isIframeLoaded || this.isIframeLoading || !this.config)
            ) {
              var t = document.getElementById(this.iframeId);
              if (t) {
                ((this.isIframeLoaded = !0), (this.isIframeLoading = !1));
                return;
              }
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[Arkose] Loading Arkose iframe..",
                  ])),
              ),
                (this.isIframeLoading = !0));
              try {
                var n,
                  a,
                  i = document.createElement("iframe");
                ((i.id = this.iframeId),
                  (i.src =
                    P +
                    "/" +
                    (((n = this.config) == null ? void 0 : n.publicKey) || "") +
                    "/lightbox.html"),
                  i.removeAttribute("sandbox"),
                  (i.style.display = "none"),
                  (a = i.sandbox).add.apply(a, [
                    "allow-scripts",
                    "allow-same-origin",
                  ]),
                  (this.secureMessageListener = new (r(
                    "SecureMessageListener",
                  ))(window)
                    .setSupportedOrigins(["arkoselabs.com"])
                    .setEventHandler(function (t) {
                      e.handleArkoseMessage(t);
                    })),
                  this.secureMessageListener.beginListening());
                var l = new Promise(function (t, n) {
                  ((i.onload = function () {
                    (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Iframe loaded successfully",
                        ])),
                    ),
                      (e.isIframeLoaded = !0),
                      (e.isIframeLoading = !1),
                      (e.iframeElement = i),
                      t());
                  }),
                    (i.onerror = function () {
                      var t = r("err")("Failed to load Arkose iframe");
                      (o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[Arkose] iframe load error",
                            ])),
                        )
                        .catching(t)
                        .sendLogs("arkose-iframe-load-error"),
                        (e.isIframeLoading = !1),
                        n(t));
                    }));
                });
                (document.body.appendChild(i),
                  await l,
                  (this.isInitialized = !0),
                  this.processPendingTriggers());
              } catch (e) {
                throw (
                  (this.isIframeLoading = !1),
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Iframe loading failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("arkose-iframe-load-exception"),
                  e
                );
              }
            }
          }),
          (n.handleArkoseMessage = function (t) {
            var e;
            if (t.origin === P && typeof t.data == "string")
              try {
                var n = JSON.parse(t.data);
                switch (n.eventId) {
                  case "challenge-loaded":
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Challenge loaded - iframe ready",
                        ])),
                    );
                    break;
                  case "challenge-suppressed":
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Challenge suppressed",
                        ])),
                    );
                    break;
                  case "challenge-complete":
                    (o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Challenge completed",
                        ])),
                    ),
                      ((e = n.payload) == null ? void 0 : e.sessionToken) !=
                      null
                        ? this.handleSignalCollection({
                            token: n.payload.sessionToken,
                          })
                        : o("WALogger").ERROR(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "[Arkose] Challenge completed but no token received",
                              ])),
                          ));
                    break;
                  case "challenge-show":
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Challenge show",
                        ])),
                    );
                    break;
                  case "challenge-shown":
                    o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Challenge shown",
                        ])),
                    );
                    break;
                  case "challenge-hide":
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Challenge hide - hiding iframe",
                        ])),
                    );
                    break;
                  default:
                    o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Unknown event: ",
                          "",
                        ])),
                      n.eventId,
                    );
                    break;
                }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[Arkose] Failed to parse iframe message",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("arkose-message-parse-error");
              }
          }),
          (n.handleSignalCollection = function (t) {
            try {
              var e,
                n = (e = this.currentTriggerContext) != null ? e : "unknown";
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[Arkose] signal done ctx=",
                    " token=",
                    "",
                  ])),
                n,
                t.token,
              );
              var a = new (o(
                "WAWebWebArkoseTokenWamEvent",
              ).WebArkoseTokenWamEvent)({ token: t.token });
              (this.mdSessionId != null && (a.mdSessionId = this.mdSessionId),
                this.mdClientSessionId != null &&
                  (a.mdClientSessionId = this.mdClientSessionId),
                a.commit(),
                this.cleanup());
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[Arkose] Signal processing failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("arkose-signal-processing-error"),
                (this.currentTriggerContext = null));
            }
          }),
          (n.trigger = async function (t) {
            var e = this;
            if (this.$1()) {
              if (!this.isInitialized || !this.config) {
                o("WALogger")
                  .ERROR(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[Arkose] Cannot trigger - manager not initialized",
                      ])),
                  )
                  .sendLogs("arkose-trigger-not-initialized");
                return;
              }
              if (!this.isIframeLoaded || !this.iframeElement)
                return new Promise(function (n, r) {
                  (e.pendingTriggers.push({
                    context: t,
                    resolve: n,
                    reject: r,
                  }),
                    e.isIframeLoading || e.loadIframe());
                });
              try {
                ((this.currentTriggerContext = t),
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[Arkose] Triggering detection for context: ",
                        "",
                      ])),
                    t,
                  ));
                try {
                  var n = {
                      publicKey: this.config.publicKey,
                      eventId: "challenge-open",
                    },
                    a = this.iframeElement.contentWindow;
                  if (a == null)
                    throw r("err")("[Arkose] iframe has no contentWindow");
                  (o("SecurePostMessage").sendMessageToSpecificOrigin(
                    a,
                    JSON.stringify(n),
                    P,
                  ),
                    o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Posted challenge-open message to iframe",
                        ])),
                    ));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "[Arkose] Failed to post challenge-open message",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("arkose-post-message-error");
                }
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[Arkose] Trigger failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("arkose-trigger-error"),
                  (this.currentTriggerContext = null));
              }
            }
          }),
          (n.processPendingTriggers = function () {
            var e = this;
            if (this.pendingTriggers.length !== 0) {
              var t = [].concat(this.pendingTriggers);
              ((this.pendingTriggers = []),
                t.forEach(function (t) {
                  var n = t.context,
                    r = t.reject,
                    o = t.resolve;
                  e.trigger(n).then(o).catch(r);
                }));
            }
          }),
          (n.setMdSessionId = function (t) {
            this.$1() && (this.mdSessionId = t);
          }),
          (n.setMdClientSessionId = function (t) {
            this.$1() && (this.mdClientSessionId = t);
          }),
          (n.cleanup = function () {
            (this.iframeElement &&
              this.iframeElement.parentNode &&
              (this.iframeElement.remove(), (this.iframeElement = null)),
              this.secureMessageListener &&
                (this.secureMessageListener.stopListening(),
                (this.secureMessageListener = null)),
              (this.isInitialized = !1),
              (this.isIframeLoaded = !1),
              (this.isIframeLoading = !1),
              (this.config = null),
              (this.pendingTriggers = []),
              (this.currentTriggerContext = null),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[Arkose] Manager cleaned up",
                  ])),
              ));
          }),
          t
        );
      })(),
      M = new N();
    l.default = M;
  },
  98,
);
