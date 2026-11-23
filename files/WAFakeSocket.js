__d(
  "WAFakeSocket",
  ["Promise", "WABinary", "WAFrameSocket", "WALogger", "WANoiseSocket"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function r() {
          var e = new (o("WAFrameSocket").FrameSocket)({
              id: 1,
              onData: function () {},
              onClose: function () {},
              onError: function () {},
              dataToSend: new (o("WABinary").Binary)(),
              close: function () {},
              requestSend: function () {},
            }),
            n = {
              type: "public",
              extractable: !1,
              algorithm: { name: "some" },
              usages: [],
            };
          return t.call(this, e, n, n) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.sendFrame = function () {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[FakeSocket] Sending stanza to nowhere",
                  ])),
              ),
              (s || (s = n("Promise"))).resolve()
            );
          }),
          r
        );
      })(o("WANoiseSocket").NoiseSocket);
    l.FakeSocket = u;
  },
  98,
);
