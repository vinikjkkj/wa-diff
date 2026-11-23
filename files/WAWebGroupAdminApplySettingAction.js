__d(
  "WAWebGroupAdminApplySettingAction",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebEventEmitter",
    "WAWebGroupAdminSettings",
    "WAWebGroupAdminSettingsLoadAction",
    "WAWebMiscErrors",
    "WAWebSetPropertyGroupAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2,
      u = 0,
      c = new (r("WAWebEventEmitter"))();
    function d() {
      return u > 0;
    }
    function m(e, t, n) {
      var r = o("WAWebGroupAdminSettings").getChatGroupAdminSettings(e);
      return (r == null ? void 0 : r[t]) == null ||
        (t === "addMembers" &&
          !n &&
          !o("WAWebGroupAdminSettingsLoadAction").isGroupLinkModeKnown(e))
        ? "not_loaded"
        : r[t] === n
          ? "already_set"
          : null;
    }
    async function p(e, t, n) {
      var r = o("WAWebGroupAdminSettings").getGroupPropertyChange(t, n);
      _(1);
      var a = !1;
      try {
        var i = await o("WAConcurrentIterate").concurrentIterate(
          e.length,
          async function (o) {
            var i = e[o],
              l = m(i, t, n);
            if (l != null) return l;
            if (a) return "rate_limited";
            var s = await g(i, r);
            return (s === "rate_limited" && (a = !0), s);
          },
          s,
        );
        return f(i);
      } finally {
        _(-1);
      }
    }
    function _(e) {
      ((u += e), c.trigger("change"));
    }
    function f(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          if (e != null) {
            var n;
            t.set(e, ((n = t.get(e)) != null ? n : 0) + 1);
          }
        }),
        {
          changedCount: e.filter(function (e) {
            return e == null;
          }).length,
          reasonCounts: t,
          totalCount: e.length,
        }
      );
    }
    async function g(t, n) {
      var a = n.settingType,
        i = n.value;
      try {
        return h(
          await o("WAWebSetPropertyGroupAction").setGroupPropertyWithoutToast(
            t,
            a,
            i,
          ),
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "applyGroupAdminSetting: failed to change ",
                  "",
                ])),
              a,
            )
            .catching(r("getErrorSafe")(t)),
          y(t)
        );
      }
    }
    function h(e) {
      return Array.isArray(e)
        ? null
        : (function (e) {
            if (
              (((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
                e.name === "SetPropertyResponseSuccess") ||
              (((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
                e.name === "SetMemberAddModeResponseSuccess")
            )
              return null;
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "SetPropertyResponseClientError" &&
              "value" in e
            ) {
              var t = e.value;
              return C(Number(t.errorSetPropertyClientErrors.value.code));
            }
            return "unknown";
          })(e);
    }
    function y(e) {
      return e instanceof o("WAWebMiscErrors").ActionError
        ? "not_allowed"
        : e instanceof o("WAWebBackendErrors").ServerStatusCodeError
          ? C(e.status)
          : "unknown";
    }
    function C(e) {
      return e === 401 || e === 403
        ? "not_admin"
        : e === 404
          ? "group_not_found"
          : e === 429
            ? "rate_limited"
            : "unknown";
    }
    ((l.GroupSettingChangeEvents = c),
      (l.isGroupSettingChangeRunning = d),
      (l.getGroupSettingSkipReason = m),
      (l.applyGroupAdminSetting = p));
  },
  98,
);
