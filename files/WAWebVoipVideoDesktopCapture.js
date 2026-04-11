__d(
  "WAWebVoipVideoDesktopCapture",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoCaptureBase",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "desktop"),
            (e.captureParams = null),
            (e.desktopStream = null),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.preflightAcquireDesktopStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              return (
                (this.desktopStream = {
                  streamPromise: o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "desktop",
                      params:
                        (e = o("WAWebVoipVideoCameraCapture")
                          .WAWebVoipVideoCameraCapture.captureParams) != null
                          ? e
                          : void 0,
                    },
                  ),
                }),
                this.desktopStream.streamPromise
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startDesktopCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r,
                  a,
                  i,
                  l = t.height,
                  d = t.maxFps,
                  m = t.width;
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startDesktopCapture] w=",
                      " h=",
                      " fps=",
                      "",
                    ])),
                  m,
                  l,
                  d,
                ),
                  this.desktopStream ||
                    (yield this.preflightAcquireDesktopStream()));
                var p = yield (r = this.desktopStream) == null
                  ? void 0
                  : r.streamPromise;
                if (((this.desktopStream = null), p == null)) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] stream failed, canceling",
                      ])),
                  );
                  var _ = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  (_ == null ? void 0 : _.type) === "web" &&
                    (yield _.stopScreenShare());
                  return;
                }
                var f = p.getVideoTracks().at(0),
                  g = f == null ? void 0 : f.getSettings(),
                  h = (a = g == null ? void 0 : g.width) != null ? a : m,
                  y = (i = g == null ? void 0 : g.height) != null ? i : l;
                ((h !== m || y !== l) &&
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startDesktopCapture] actual=",
                        "x",
                        " req=",
                        "x",
                        "",
                      ])),
                    h,
                    y,
                    m,
                    l,
                  ),
                  (this.captureParams = { width: h, height: y, maxFps: d }),
                  f == null ||
                    f.addEventListener(
                      "ended",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          o("WALogger").LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[AV:startDesktopCapture] stream ended, stopping",
                              ])),
                          );
                          var e = yield o(
                            "WAWebVoipStackInterface",
                          ).getVoipStackInterface();
                          (e == null ? void 0 : e.type) === "web" &&
                            (yield e.stopScreenShare());
                        },
                      ),
                    ),
                  yield this.__startCapture({
                    getMediaStream: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          return p;
                        },
                      );
                      function t() {
                        return e.apply(this, arguments);
                      }
                      return t;
                    })(),
                    onVideoDataFnType: "onDesktopCaptureDataFromJs",
                    width: h,
                    height: y,
                    maxFps: d,
                  }));
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.__cleanup = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield t.prototype.__cleanup.call(this),
                (this.desktopStream = null));
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          r
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      m = new d();
    l.WAWebVoipVideoDesktopCapture = m;
  },
  98,
);
