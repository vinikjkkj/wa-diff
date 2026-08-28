__d(
  "AdsExperimentsFunnelLogger",
  [
    "Bootloader",
    "FBLogger",
    "Promise",
    "Random",
    "asyncToGeneratorRuntime",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["event_name"],
      s,
      u = 0.01,
      c = new Set(),
      d = (function () {
        function t() {
          ((this.$1 = new Map()),
            (this.$2 = (s || (s = n("Promise"))).resolve(null)),
            (this.$3 = new Map()),
            (this.$4 = { event_name: null }),
            (this.$5 = new Map()),
            (this.$6 = []),
            (this.$7 = null));
        }
        ((t.withoutAccountID = function () {
          return new t().$8();
        }),
          (t.withAccountID = function (n) {
            return new t().setAdAccountID(n);
          }),
          (t.logCreationAction = function (t, o) {
            var e = o === void 0 ? {} : o,
              a = e.isDeprecated,
              i = a === void 0 ? !1 : a,
              l = e.logOnce,
              u = l === void 0 ? !1 : l,
              c = Date.now();
            r("promiseDone")(
              new (s || (s = n("Promise")))(function (e) {
                return r("Bootloader").loadModules(
                  ["AdsExperimentsCreationFunnelLogger"],
                  function (n) {
                    e(n.log(t, c, i, u));
                  },
                  "AdsExperimentsFunnelLogger",
                );
              }),
            );
          }));
        var a = t.prototype;
        return (
          (a.$8 = function () {
            return (
              (this.$2 = new (s || (s = n("Promise")))(function (e) {
                return r("Bootloader").loadModules(
                  ["AdsAccountStore"],
                  function (t) {
                    return e(t.getSelectedAccountID());
                  },
                  "AdsExperimentsFunnelLogger",
                );
              })),
              this
            );
          }),
          (a.log = function () {
            r("promiseDone")(this.$9(!1));
          }),
          (a.logOnce = function () {
            r("promiseDone")(this.$9(!0));
          }),
          (a.logOnceWithDownsampling = function () {
            o("Random").random() < u && r("promiseDone")(this.$9(!0));
          }),
          (a.$9 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var o = String(Date.now()),
                  a = this.$4,
                  i = a.event_name,
                  l = babelHelpers.objectWithoutPropertiesLoose(a, e),
                  u = i;
                u == null &&
                  (r("FBLogger")("ads_experiments").mustfix(
                    "AdsExperimentsFunnelLogger event being logged without event name",
                  ),
                  (u = "UNKNOWN"));
                var c = yield this.$2;
                if (
                  (yield (s || (s = n("Promise"))).all(this.$6),
                  !!(yield m({
                    adAccountID: c,
                    actionParams: this.$1,
                    eventName: u,
                    funnelParams: this.$5,
                    logOnce: t,
                  })))
                ) {
                  var d = babelHelpers.extends(
                      { ad_account_id: c, client_event_time_ms: o },
                      l,
                      {
                        event_name: u,
                        action_params: Object.fromEntries(this.$1),
                        additive_funnel_params: Object.fromEntries(this.$3),
                        funnel_params: Object.fromEntries(this.$5),
                      },
                    ),
                    p = this.$7;
                  yield new s(function (e) {
                    return r("Bootloader").loadModules(
                      ["adsExperimentsLogEvent"],
                      function (t) {
                        e(t(d, p));
                      },
                      "AdsExperimentsFunnelLogger",
                    );
                  });
                }
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.addActionParam = function (t, n) {
            return (this.$6.push(_({ key: t, map: this.$1, value: n })), this);
          }),
          (a.addFunnelParams = function (t, n) {
            return (this.$6.push(_({ key: t, map: this.$5, value: n })), this);
          }),
          (a.markEnd = function () {
            return ((this.$4.session_marker = "end"), this);
          }),
          (a.markStart = function () {
            return ((this.$4.session_marker = "start"), this);
          }),
          (a.setEventName = function (t) {
            return ((this.$4.event_name = t), this);
          }),
          (a.setClientEventTimeMS = function (t) {
            return ((this.$4.client_event_time_ms = String(t)), this);
          }),
          (a.setSecondaryOrder = function (t) {
            var e = typeof t == "number" ? String(t) : t;
            return ((this.$4.secondary_order = e), this);
          }),
          (a.addAdditiveFunnelParam = function (t, n) {
            return (this.$3.set(t, n), this);
          }),
          (a.setAdAccountID = function (t) {
            return ((this.$4.ad_account_id = t), this);
          }),
          (a.setFunnels = function (t) {
            var e = Array.isArray(t) ? t : [t];
            return ((this.$4.funnels = e), this);
          }),
          (a.setHideFromFunnelUI = function (t) {
            return ((this.$4.hide_from_funnel_ui = t), this);
          }),
          (a.setIsLegacy = function (t) {
            return ((this.$4.is_legacy = t), this);
          }),
          (a.setStackTrace = function (t) {
            return ((this.$4.stack_trace = t), this);
          }),
          (a.setAction = function (t) {
            return this.setEventName(t);
          }),
          (a.addActionPayload = function (t, n) {
            return this.addActionParam(t, n);
          }),
          (a.addFunnelPayload = function (t, n) {
            return this.addFunnelParams(t, n);
          }),
          (a.setIsDeprecated = function (t) {
            return ((this.$4.is_deprecated = t), this);
          }),
          (a.setDebugEventSubTitle = function (t) {
            return ((this.$7 = t), this);
          }),
          t
        );
      })();
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.actionParams,
            o = e.adAccountID,
            a = e.eventName,
            i = e.funnelParams,
            l = e.logOnce;
          if (l !== !0) return (s || (s = n("Promise"))).resolve(!0);
          var u = yield new (s || (s = n("Promise")))(function (e) {
            return r("Bootloader").loadModules(
              ["jsObjectHash"],
              function (n) {
                var r = n({
                    adAccountID: o,
                    eventName: a,
                    action_params: Object.fromEntries(t),
                    funnel_params: Object.fromEntries(i),
                  }),
                  l = c.has(r);
                (c.add(r), e(l));
              },
              "AdsExperimentsFunnelLogger",
            );
          });
          return !u;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.key,
        o = e.map,
        a = e.value;
      return new (s || (s = n("Promise")))(function (e) {
        return r("Bootloader").loadModules(
          ["adsExperimentsLoggerUnmixValue"],
          function (n) {
            (o.set(t, n(a)), e());
          },
          "AdsExperimentsFunnelLogger",
        );
      });
    }
    l.default = d;
  },
  98,
);
