__d(
  "WAWebStanzaValidation",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidValidator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      (p(e), f(e), C(e), b(e), v(e));
    }
    function p(t) {
      t.tag !== "receipt" ||
        t.attrs.type !== "sender" ||
        (t.attrs.recipient == null &&
          t.attrs.participant == null &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[stanza-validation] sender rcpt: no recipient/participant",
                ])),
            )
            .sendLogs(
              "sender-receipt-without-participant-nor-recipient-validation",
            ));
    }
    function _(e) {
      if (!Array.isArray(e.content)) return [];
      var t = e.content.find(function (e) {
          return (e == null ? void 0 : e.tag) === "participants";
        }),
        n = t == null ? void 0 : t.content;
      if (!Array.isArray(n)) return [];
      var r = [];
      return (
        n.forEach(function (e) {
          var t;
          (e == null ? void 0 : e.tag) === "to" &&
            ((t = e.attrs) == null ? void 0 : t.jid) != null &&
            r.push(String(e.attrs.jid));
        }),
        r
      );
    }
    function f(e) {
      if (e.tag === "message") {
        var t = e.attrs.to;
        if (!(t == null || !String(t).endsWith("@broadcast"))) {
          var n = _(e);
          if (n.length !== 0) {
            var r = [],
              a = !1,
              i = 0;
            if (
              (n.forEach(function (e) {
                if (!e.includes("@lid")) {
                  r.push(e);
                  try {
                    var t = o("WAWebWidFactory").asUserWidOrThrow(
                      o("WAWebWidFactory").createWid(e),
                    );
                    (o("WAWebUserPrefsMeUser").isMeAccount(t) && (a = !0),
                      o("WAWebLidMigrationUtils").toLid(t) != null && i++);
                  } catch (e) {}
                }
              }),
              r.length > 0)
            ) {
              var l = r.map(g).join(",");
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] broadcast pn-fanout: ",
                      "/",
                      " <to> nodes using PN in broadcast ",
                      ", includesSelfPn=",
                      ", pnWithLid=",
                      ", pnWithoutLid=",
                      ": ",
                      "",
                    ])),
                  r.length,
                  n.length,
                  String(t),
                  a,
                  i,
                  r.length - i,
                  l,
                )
                .sendLogs("broadcast-pn-fanout-to-node");
            }
          }
        }
      }
    }
    function g(e) {
      try {
        return o("WAWebWidFactory").createWid(e).toLogString();
      } catch (t) {
        return e;
      }
    }
    function h(e) {
      return e.tag !== "message" || !Array.isArray(e.content)
        ? !1
        : e.content.some(function (e) {
            var t;
            return (
              (e == null ? void 0 : e.tag) === "enc" &&
              ((t = e.attrs) == null ? void 0 : t.count) != null
            );
          });
    }
    function y(e) {
      var t = o("WAWebWidValidator").validateAndGetParts(e);
      if (t == null || t.userPart == null) return !1;
      var n = o("WAWebWidFactory").createWid(e);
      return o("WAWebLidMigrationUtils").shouldHaveAccountLid(n) && !n.isLid();
    }
    function C(e) {
      if (!(e.tag === "receipt" || e.tag === "ack")) {
        var t = e.attrs.to;
        if (t != null) {
          var n = String(t);
          if (
            y(n) &&
            !(
              e.attrs.category === "peer" &&
              o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(n),
              )
            ) &&
            !h(e) &&
            o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
          ) {
            var r = g(n);
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] pnless-stanza: <",
                    "> to=",
                    " is PN despite web_pnless_stanzas being enabled",
                  ])),
                e.tag,
                r,
              )
              .sendLogs("pnless-stanza-to-pn-leak");
          }
        }
      }
    }
    function b(e) {
      if (e.tag === "message") {
        var t = e.attrs.to;
        if (t != null) {
          var n = String(t),
            r = o("WAWebWidValidator").validateAndGetParts(n);
          if (!(r == null || r.userPart == null)) {
            var a = o("WAWebWidFactory").createWid(n);
            if (a.isUser()) {
              var i = _(e),
                l = i.filter(y);
              if (
                l.length !== 0 &&
                o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") ===
                  !0
              ) {
                var s = l.map(g).join(",");
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[stanza-validation] pnless-stanza: <",
                        "> participant(s) using PN despite web_pnless_stanzas being enabled: ",
                        "",
                      ])),
                    e.tag,
                    s,
                  )
                  .sendLogs("pnless-stanza-participant-pn-leak");
              }
            }
          }
        }
      }
    }
    function v(e) {
      if (e.tag === "message") {
        var t = _(e);
        if (t.length !== 0) {
          var n = 0,
            r = 0,
            a = [];
          if (
            (t.forEach(function (e) {
              e.includes("@lid")
                ? n++
                : e.includes("@s.whatsapp.net") && (r++, a.push(e));
            }),
            n > 0 && r > 0)
          ) {
            var i = a.map(g).join(",");
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[stanza-validation] mixed-participants: <message> has both LID (",
                    ") and PN (",
                    ") participants: ",
                    "",
                  ])),
                n,
                r,
                i,
              )
              .sendLogs("mixed-addressing-participants");
          }
        }
      }
    }
    l.validateSentStanza = m;
  },
  98,
);
