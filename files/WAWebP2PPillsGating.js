__d(
  "WAWebP2PPillsGating",
  ["WALogger", "WAWebABProps", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { senderEnabled: !0, receiverEnabled: !0, contactCardEnabled: !1 },
      c = "wrong_type",
      d = null;
    function m(e) {
      var t = e.businessInteractionPills,
        n = e.is1to1,
        r = e.isFromMe,
        a = e.type;
      return (
        t != null &&
        a === o("WAWebMsgType").MSG_TYPE.VCARD &&
        n &&
        o("WAWebABProps").getABPropConfigValue("p2p_pills_enabled") &&
        g(r) &&
        f(r)
      );
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue("p2p_pills_enabled") && g(!0)
      );
    }
    function _(e) {
      return (
        e.length > 0 &&
        p() &&
        o("WAWebABProps").getABPropConfigValue(
          "p2p_pills_contact_share_sender_enabled",
        )
      );
    }
    function f(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "p2p_pills_contact_share_sender_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "p2p_pills_contact_share_receiver_enabled",
          );
    }
    function g(e) {
      var t = h(),
        n = t.contactCardEnabled,
        r = t.receiverEnabled,
        o = t.senderEnabled;
      return (e ? o : r) && n;
    }
    function h() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "p2p_pills_entries_enabled",
      );
      if (e === "") return u;
      var t = d;
      if (t != null && t.json === e) return t.config;
      var n = y(e);
      return ((d = { json: e, config: n }), n);
    }
    function y(t) {
      var n;
      try {
        n = JSON.parse(t);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[P2PPills] p2p_pills_entries_enabled is not valid JSON",
                ])),
            )
            .sendLogs("p2p-pills-entries-config-invalid"),
          u
        );
      }
      var r = C(n, "enabled_for", "sender"),
        a = C(n, "enabled_for", "receiver"),
        i = C(n, "enabled_on", "contact_card");
      return r === c || a === c || i === c
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[P2PPills] p2p_pills_entries_enabled has a value of the wrong type",
                ])),
            )
            .sendLogs("p2p-pills-entries-config-invalid"),
          u)
        : {
            senderEnabled: r != null ? r : !0,
            receiverEnabled: a != null ? a : !0,
            contactCardEnabled: i != null ? i : !1,
          };
    }
    function C(e, t, n) {
      if (!b(e)) return c;
      var r = e[t];
      if (r === void 0) return null;
      if (!b(r)) return c;
      var o = r[n];
      return o === void 0 ? null : typeof o == "boolean" ? o : c;
    }
    function b(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    ((l.shouldRenderContactCardPills = m),
      (l.canAttachContactCardPills = p),
      (l.shouldAttachContactCardPills = _));
  },
  98,
);
