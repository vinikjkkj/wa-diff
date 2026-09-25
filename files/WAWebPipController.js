__d(
  "WAWebPipController",
  [
    "WALogger",
    "WAWebEventEmitter",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPipConst",
    "WAWebVoipGatingUtils",
    "getErrorSafe",
  ],
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
      h = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.openPiP = function (e, t, r) {
              var a;
              (a = n.manager) == null ||
                a.openPiP(o("WAWebPipConst").PiPVideoType.MSG, {
                  msg: e,
                  startTime: t,
                  zoomRect: r,
                  videoSrc: null,
                  preview: null,
                });
            }),
            (n.closePiP = function () {
              var e;
              ((n.__pendingAction = null),
                (e = n.manager) == null || e.closePiP());
            }),
            (n.pausePiP = function () {
              var e;
              (e = n.manager) == null || e.pausePiP();
            }),
            (n.openYoutubePiP = function (t, a, i, l) {
              o("WAWebMsgRcatUtils")
                .genNonceForMsg(a)
                .then(function (e) {
                  var r,
                    s = o("WAWebMsgGetters").getRcatString(a),
                    u =
                      e != null && s != null
                        ? { nonce: e, counterAbuseToken: s }
                        : null;
                  (r = n.manager) == null ||
                    r.openPiP(o("WAWebPipConst").PiPVideoType.YOUTUBE, {
                      msg: a,
                      startTime: i,
                      zoomRect: l,
                      videoSrc: t,
                      preview: null,
                      counterAbuseData: u,
                    });
                })
                .catch(function (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[PiP] openYoutubePiP failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("pip-open-youtube-failed");
                });
            }),
            (n.openVoipUiPiP = function (e) {
              if (!o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] openVoipUiPiP: suppressed, native platform owns the call UI",
                    ])),
                );
                return;
              }
              if (n.manager != null) {
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] openVoipUiPiP: delegating to PiPManager",
                    ])),
                ),
                  n.__openVoipPiP(e));
                return;
              }
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiP: manager not ready, deferring",
                  ])),
              ),
                (n.__pendingAction = function () {
                  return n.__openVoipPiP(e);
                }));
            }),
            (n.openVoipUiPiPForCallLink = function () {
              if (!o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] openVoipUiPiPForCallLink: suppressed, native platform owns the call UI",
                    ])),
                );
                return;
              }
              if (n.manager != null) {
                (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] openVoipUiPiPForCallLink: delegating to PiPManager",
                    ])),
                ),
                  n.__openVoipCallLinkPiP());
                return;
              }
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiPForCallLink: manager not ready, deferring",
                  ])),
              ),
                (n.__pendingAction = function () {
                  return n.__openVoipCallLinkPiP();
                }));
            }),
            (n.openVoipUiPiPForOutgoing = function () {
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiPForOutgoing: opening msg-less PiP for outgoing call",
                  ])),
              ),
                n.openVoipUiPiPForCallLink());
            }),
            (n.isOpened = function (e) {
              var t, r;
              return (t = (r = n.manager) == null ? void 0 : r.isOpened(e)) !=
                null
                ? t
                : !1;
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.register = function (t) {
            if (
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] PiPManager registered",
                  ])),
              ),
              (this.manager = t),
              this.__pendingAction != null)
            ) {
              var e = this.__pendingAction;
              ((this.__pendingAction = null),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] flushing pending PiP action after manager registration",
                    ])),
                ),
                e());
            }
          }),
          (a.unregister = function () {
            ((this.__pendingAction = null), (this.manager = null));
          }),
          (a.__openVoipPiP = function (t) {
            var e;
            (e = this.manager) == null ||
              e.openPiP(o("WAWebPipConst").PiPVideoType.VOIP, {
                msg: t,
                preview: null,
                startTime: null,
                videoSrc: null,
                zoomRect: null,
              });
          }),
          (a.__openVoipCallLinkPiP = function () {
            var e;
            (e = this.manager) == null ||
              e.openPiP(o("WAWebPipConst").PiPVideoType.VOIP, {
                msg: null,
                preview: null,
                startTime: null,
                videoSrc: null,
                zoomRect: null,
              });
          }),
          (a.didOpen = function (t) {
            this.trigger(t.id.toString() + "_pip_did_open");
          }),
          (a.didClose = function (t) {
            this.trigger(t.id.toString() + "_pip_did_close");
          }),
          (a.didError = function (t) {
            this.trigger(t.id.toString() + "_pip_did_error");
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      y = new h(),
      C = y;
    l.default = C;
  },
  98,
);
