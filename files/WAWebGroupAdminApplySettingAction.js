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
    "asyncToGeneratorRuntime",
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = o("WAWebGroupAdminSettings").getGroupPropertyChange(t, r);
          f(1);
          var i = !1;
          try {
            var l = yield o("WAConcurrentIterate").concurrentIterate(
              e.length,
              (function () {
                var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var o = e[n],
                      l = m(o, t, r);
                    if (l != null) return l;
                    if (i) return "rate_limited";
                    var s = yield h(o, a);
                    return (s === "rate_limited" && (i = !0), s);
                  },
                );
                return function (e) {
                  return o.apply(this, arguments);
                };
              })(),
              s,
            );
            return g(l);
          } finally {
            f(-1);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      ((u += e), c.trigger("change"));
    }
    function g(e) {
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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.settingType,
            i = n.value;
          try {
            return C(
              yield o(
                "WAWebSetPropertyGroupAction",
              ).setGroupPropertyWithoutToast(t, a, i),
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
              b(t)
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
              return v(Number(t.errorSetPropertyClientErrors.value.code));
            }
            return "unknown";
          })(e);
    }
    function b(e) {
      return e instanceof o("WAWebMiscErrors").ActionError
        ? "not_allowed"
        : e instanceof o("WAWebBackendErrors").ServerStatusCodeError
          ? v(e.status)
          : "unknown";
    }
    function v(e) {
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
