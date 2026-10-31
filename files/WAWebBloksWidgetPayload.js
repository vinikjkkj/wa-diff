__d(
  "WAWebBloksWidgetPayload",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = "im_a2ui";
    function s(t) {
      return (t == null ? void 0 : t.type) === e;
    }
    function u(e) {
      var t = h(e, "title");
      if (t == null) return null;
      var n = t.trim();
      return n === "" ? null : n;
    }
    function c(e) {
      return h(e, "type");
    }
    function d(e) {
      var t,
        n = (t = h(e, "fallback_text")) == null ? void 0 : t.trim();
      return n == null || n === "" ? null : n;
    }
    function m(e, t) {
      return typeof t != "string"
        ? !0
        : t
            .split(",")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e !== "";
            })
            .includes(e);
    }
    function p(e) {
      var t = y(e);
      return t == null || "component" in t || "components" in t
        ? null
        : C(t.type);
    }
    function _(e) {
      return e.remote.isAiHub()
        ? !e.fromMe &&
          o("WAWebABProps").getABPropConfigValue(
            "biz_ai_agent_chat_a2ui_enabled",
          )
          ? "agent_chat"
          : null
        : o("WAWebABProps").getABPropConfigValue("a2ui_fallback_show_timestamp")
          ? "consumer_chat"
          : null;
    }
    function f(e) {
      var t = p(e == null ? void 0 : e.data);
      return t == null ||
        m(t, o("WAWebABProps").getABPropConfigValue("a2ui_supported_elements"))
        ? null
        : t;
    }
    function g(e) {
      var t,
        n = e == null || (t = e.fallback) == null ? void 0 : t.trim();
      return n != null && n !== "" ? n : d(e == null ? void 0 : e.data);
    }
    function h(e, t) {
      var n = y(e);
      return n == null ? null : C(n[t]);
    }
    function y(e) {
      if (e == null || e === "") return null;
      try {
        var t = JSON.parse(e);
        return t == null || typeof t != "object" || Array.isArray(t)
          ? null
          : babelHelpers.extends({}, t);
      } catch (e) {
        return null;
      }
    }
    function C(e) {
      return typeof e == "string" && e.length > 0 ? e : null;
    }
    ((l.isA2UIBloksWidget = s),
      (l.readA2UITitle = u),
      (l.readA2UIComponentType = c),
      (l.readA2UIFallbackText = d),
      (l.isA2UIElementSupported = m),
      (l.readA2UIAxonComponentType = p),
      (l.getA2uiNativeBubbleChatKind = _),
      (l.readA2uiUnsupportedComponentType = f),
      (l.readA2uiTextFallback = g));
  },
  98,
);
