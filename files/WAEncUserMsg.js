__d(
  "WAEncUserMsg",
  ["Promise", "WAEncNode", "WAGlobals", "WAJids", "WAPhash", "WATagsLogger"],
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
      h = o("WATagsLogger").TAGS(["WAEncUserMsg"]);
    function y(t, r, a, i) {
      (h.LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "sendWrittenMsg -- encryptUserMsg -- user message -- START",
          ])),
      ),
        t.length === 0 &&
          h.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAEncUserMsg -- no recipient",
              ])),
          ),
        h.LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "sendWrittenMsg -- encryptUserMsg -- user message",
            ])),
        ));
      var l = t
        .flatMap(function (e) {
          return e.devicesInfo;
        })
        .map(function (e) {
          return e.jid;
        });
      return (
        R(t) &&
          h.LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendWrittenMsg -- encryptUserMsg -- user message -- OTHER_RECIPENT_DEVICE_EMPTY",
              ])),
          ),
        (g || (g = n("Promise")))
          .all([
            b(l, r, a, i),
            o("WAPhash").calculatePHash(
              l.concat(o("WAGlobals").getMyDeviceJid()),
            ),
          ])
          .then(function (e) {
            var t = e[0],
              n = e[1];
            return (
              h.LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendWrittenMsg -- encryptUserMsg -- user message -- DONE",
                  ])),
              ),
              { participants: t, phash: n }
            );
          })
      );
    }
    function C(e, t, n) {
      return b(e, t, n);
    }
    function b(e, t, n, r) {
      return S(e, t, n, r).then(function (e) {
        if (e.length === 0) {
          (h.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "WAEncUserMsg -- getParticipantNodes -- EMPTY NODE",
              ])),
          ),
            r == null || r.addPoint("getParticipantNodes_empty_node"));
          return;
        }
        return e;
      });
    }
    function v(e, t, n, r, a, i) {
      return o("WAEncNode").getEncNode(e, t, n, r, a, i);
    }
    function S(e, t, n, r) {
      var a = !1;
      (h.LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "WAEncUserMsg -- encrypt -- getParticipantNodes -- START",
          ])),
      ),
        (t.type !== "message" ||
          o("WAJids").interpretAsGroupJid(t.chat) != null) &&
          (a = !0));
      var i = o("WAEncNode")
        .getEncNodes(
          new Map(
            e.map(function (e) {
              return [e, { params: t }];
            }),
          ),
          n,
        )
        .then(function (e) {
          return e == null
            ? (h.WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "WAEncUserMsg -- encrypt - getParticipantNodes -- EMPTY DEVICE JIDS",
                  ])),
              ),
              r == null || r.addPoint("getParticipantNodes_empty_device_jids"),
              [])
            : (t.type === "message" &&
                (a =
                  a ||
                  Array.from(e.keys()).some(function (e) {
                    return o("WAJids").extractUserJid(e) === t.chat;
                  })),
              Array.from(e == null ? void 0 : e.values()));
        });
      return i
        .then(function (e) {
          return a
            ? e
            : (h.ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "WAEncUserMsg -- getParticipantNodes -- receiverEncypted -- FALSE",
                  ])),
              ),
              r == null ||
                r.addPoint("getParticipantNodes_receiverEncypted_false"),
              []);
        })
        .then(function (e) {
          return e.filter(Boolean);
        });
    }
    function R(e) {
      return (
        e
          .filter(function (e) {
            return e.user !== o("WAGlobals").getMyUserJid();
          })
          .flatMap(function (e) {
            return e.devicesInfo;
          }).length === 0
      );
    }
    ((l.encryptUserMsg = y),
      (l.encryptGroupFanoutMsg = C),
      (l.encryptDeviceJidMessage = v));
  },
  98,
);
