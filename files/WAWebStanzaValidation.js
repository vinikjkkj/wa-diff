__d(
  "WAWebStanzaValidation",
  [
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidValidator",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _;
    function f(t) {
      try {
        (g(t), y(t), S(t), R(t), L(t));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[stanza-validation]",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("stanza-validation-error");
      }
    }
    function g(e) {
      if (!(e.tag !== "receipt" || e.attrs.type !== "sender")) {
        e.attrs.recipient == null &&
          e.attrs.participant == null &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[stanza-validation] sender rcpt: no recipient/participant",
                ])),
            )
            .sendLogs(
              "sender-receipt-without-participant-nor-recipient-validation",
            );
        var t = e.attrs.recipient,
          n = e.attrs.to;
        if (t != null && n != null) {
          var r = o("WAWap").decodeAsString(t),
            a = o("WAWap").decodeAsString(n),
            i = C(r),
            l = C(a);
          a.includes("@lid") && r.includes("@s.whatsapp.net")
            ? o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] sender rcpt: pn recipient=",
                      " to=",
                      "",
                    ])),
                  i,
                  l,
                )
                .sendLogs("sender-receipt-pn-recipient-validation")
            : a.includes("@s.whatsapp.net") &&
              r.includes("@lid") &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[stanza-validation] sender rcpt: pn to=",
                      " recipient=",
                      "",
                    ])),
                  l,
                  i,
                )
                .sendLogs("sender-receipt-pn-to-validation");
        }
      }
    }
    function h(e) {
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
            r.push(o("WAWap").decodeAsString(e.attrs.jid));
        }),
        r
      );
    }
    function y(e) {
      if (e.tag === "message") {
        var t = e.attrs.to;
        if (
          !(t == null || !o("WAWap").decodeAsString(t).endsWith("@broadcast"))
        ) {
          var n = h(e);
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
              var l = r.map(C).join(",");
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  o("WAWap").decodeAsString(t),
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
    function C(e) {
      try {
        return o("WAWebWidFactory").createWid(e).toLogString();
      } catch (t) {
        return e;
      }
    }
    function b(e) {
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
    function v(e) {
      var t = o("WAWebWidValidator").validateAndGetParts(e);
      if (t == null || t.userPart == null) return !1;
      var n = o("WAWebWidFactory").createWid(e);
      return o("WAWebLidMigrationUtils").shouldHaveAccountLid(n) && !n.isLid();
    }
    function S(e) {
      if (!(e.tag === "receipt" || e.tag === "ack")) {
        var t = e.attrs.to;
        if (t != null) {
          var n = o("WAWap").decodeAsString(t);
          if (
            v(n) &&
            !(
              e.attrs.category === "peer" &&
              o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(n),
              )
            ) &&
            !b(e) &&
            o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0
          ) {
            var r = C(n);
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function R(e) {
      if (e.tag === "message") {
        var t = e.attrs.to;
        if (t != null) {
          var n = o("WAWap").decodeAsString(t),
            r = o("WAWebWidValidator").validateAndGetParts(n);
          if (!(r == null || r.userPart == null)) {
            var a = o("WAWebWidFactory").createWid(n);
            if (a.isUser()) {
              var i = h(e),
                l = i.filter(v);
              if (
                l.length !== 0 &&
                o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") ===
                  !0
              ) {
                var s = l.map(C).join(",");
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
    function L(e) {
      if (e.tag === "message") {
        var t = h(e);
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
            var i = a.map(C).join(",");
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    l.validateSentStanza = f;
  },
  98,
);
