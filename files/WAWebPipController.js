__d(
  "WAWebPipController",
  [
    "WALogger",
    "WAWebEventEmitter",
    "WAWebMsgGetters",
    "WAWebMsgRcatUtils",
    "WAWebPipConst",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
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
            (n.openYoutubePiP = function (e, t, r, a) {
              o("WAWebMsgRcatUtils")
                .genNonceForMsg(t)
                .then(function (i) {
                  var l,
                    s = o("WAWebMsgGetters").getRcatString(t),
                    u =
                      i != null && s != null
                        ? { nonce: i, counterAbuseToken: s }
                        : null;
                  (l = n.manager) == null ||
                    l.openPiP(o("WAWebPipConst").PiPVideoType.YOUTUBE, {
                      msg: t,
                      startTime: r,
                      zoomRect: a,
                      videoSrc: e,
                      preview: null,
                      counterAbuseData: u,
                    });
                });
            }),
            (n.openOgVideoPiP = function (e, t, r, a, i) {
              var l;
              (l = n.manager) == null ||
                l.openPiP(o("WAWebPipConst").PiPVideoType.OG, {
                  videoSrc: e,
                  preview: t,
                  msg: r,
                  startTime: a,
                  zoomRect: i,
                });
            }),
            (n.openVoipUiPiP = function (t) {
              if (n.manager != null) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] openVoipUiPiP: delegating to PiPManager",
                    ])),
                ),
                  n.__openVoipPiP(t));
                return;
              }
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiP: manager not ready, deferring",
                  ])),
              ),
                (n.__pendingAction = function () {
                  return n.__openVoipPiP(t);
                }));
            }),
            (n.openVoipUiPiPForCallLink = function () {
              if (n.manager != null) {
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] openVoipUiPiPForCallLink: delegating to PiPManager",
                    ])),
                ),
                  n.__openVoipCallLinkPiP());
                return;
              }
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] openVoipUiPiPForCallLink: manager not ready, deferring",
                  ])),
              ),
                (n.__pendingAction = function () {
                  return n.__openVoipCallLinkPiP();
                }));
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
        var r = n.prototype;
        return (
          (r.register = function (t) {
            if (
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[PiP] PiPManager registered",
                  ])),
              ),
              (this.manager = t),
              this.__pendingAction != null)
            ) {
              var e = this.__pendingAction;
              ((this.__pendingAction = null),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[PiP] flushing pending PiP action after manager registration",
                    ])),
                ),
                e());
            }
          }),
          (r.unregister = function () {
            ((this.__pendingAction = null), (this.manager = null));
          }),
          (r.__openVoipPiP = function (t) {
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
          (r.__openVoipCallLinkPiP = function () {
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
          (r.didOpen = function (t) {
            this.trigger(t.id.toString() + "_pip_did_open");
          }),
          (r.didClose = function (t) {
            this.trigger(t.id.toString() + "_pip_did_close");
          }),
          (r.didError = function (t) {
            this.trigger(t.id.toString() + "_pip_did_error");
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      _ = new p(),
      f = _;
    l.default = f;
  },
  98,
);
