__d(
  "WAWebP2PPillsGating",
  ["WALogger", "WAWebABProps", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { receiverEnabled: !0, contactCardEnabled: !1 },
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
        _() &&
        p(r)
      );
    }
    function p(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "p2p_pills_contact_share_sender_enabled",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "p2p_pills_contact_share_receiver_enabled",
          );
    }
    function _() {
      var e = f(),
        t = e.contactCardEnabled,
        n = e.receiverEnabled;
      return n && t;
    }
    function f() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "p2p_pills_entries_enabled",
      );
      if (e === "") return u;
      var t = d;
      if (t != null && t.json === e) return t.config;
      var n = g(e);
      return ((d = { json: e, config: n }), n);
    }
    function g(t) {
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
      var r = h(n, "enabled_for", "receiver"),
        a = h(n, "enabled_on", "contact_card");
      return r === c || a === c
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
            receiverEnabled: r != null ? r : !0,
            contactCardEnabled: a != null ? a : !1,
          };
    }
    function h(e, t, n) {
      if (!y(e)) return c;
      var r = e[t];
      if (r === void 0) return null;
      if (!y(r)) return c;
      var o = r[n];
      return o === void 0 ? null : typeof o == "boolean" ? o : c;
    }
    function y(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    l.shouldRenderContactCardPills = m;
  },
  98,
);
