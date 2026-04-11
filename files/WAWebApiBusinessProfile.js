__d(
  "WAWebApiBusinessProfile",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebBotTypes",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBusinessProfile",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaBusinessProfile")
            .getBusinessProfileTable()
            .get(e);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e);
          t.isLid() || s(0, 86986);
          var n = yield p(e);
          if (n == null) {
            var r = o("WAWebLidMigrationUtils").toPn(t);
            if (r != null) {
              var a = r.toString(),
                i = yield p(a);
              if (i != null) return babelHelpers.extends({}, i, { id: e });
            }
          }
          return n;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e),
            n = o("WAWebLidMigrationUtils").toLid(t);
          if (n != null) {
            var r = yield p(n.toString());
            if (r != null) return babelHelpers.extends({}, r, { id: e });
          }
          return p(e);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebBizGatingUtils",
          ).isLidMigrationForBusinessProfileEnabled()
            ? o("WAWebWidFactory").createWid(e).isLid()
              ? f(e)
              : h(e)
            : p(e);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(e);
          return t ? N(t) : null;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield v(e);
          if (t == null) {
            var n = o("WAWebWidFactory").createWid(e),
              r = o("WAWebLidMigrationUtils").toPn(n);
            if (r != null) {
              var a = yield v(r.toString());
              if (a != null) return babelHelpers.extends({}, a, { id: n });
            }
          }
          return t;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e),
            n = o("WAWebLidMigrationUtils").toLid(t);
          if (n != null) {
            var r = yield v(n.toString());
            if (r != null) return babelHelpers.extends({}, r, { id: t });
          }
          return v(e);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebBizGatingUtils").isLidMigrationForBusinessProfileEnabled()
          )
            return v(e);
          var t = o("WAWebWidFactory").createWid(e);
          return t.isLid() ? R(e) : E(e);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = M(e);
          yield o("WAWebSchemaBusinessProfile")
            .getBusinessProfileTable()
            .createOrMerge(t.id, t);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            r = o(
              "WAWebBizGatingUtils",
            ).isLidMigrationForBusinessProfileEnabled()
              ? o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t)
              : [t];
          return (m || (m = n("Promise"))).all(
            r.map(function (t) {
              return D(babelHelpers.extends({}, e, { id: t }));
            }),
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(t) {
      var n = t.commandsDescription,
        r = o("WAWebWidFactory").createWid(t.id),
        a = o("WAWebBotTypes").BizBotAutomatedType.cast(t.automatedType),
        i = o("WAWebBotTypes").BotWelcomeMsgProtocolModeType.cast(
          t.welcomeMsgProtocolMode,
        ),
        l;
      if (t.prompts != null)
        try {
          ((l = JSON.parse(t.prompts)),
            Array.isArray(l) ||
              ((l = null),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "businessProfileFromDbRow: prompts are not an array",
                    ])),
                )
                .sendLogs(
                  "businessProfileFromDbRow: prompts are not an array",
                )));
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "businessProfileFromDbRow: prompts parsing failed",
                ])),
            )
            .sendLogs("businessProfileFromDbRow: prompts parsing failed");
        }
      var s;
      if (t.commands != null)
        try {
          ((s = JSON.parse(t.commands)),
            Array.isArray(s) ||
              ((s = null),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "businessProfileFromDbRow: commands are not an array",
                    ])),
                )
                .sendLogs(
                  "businessProfileFromDbRow: commands are not an array",
                )));
        } catch (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "businessProfileFromDbRow: commands parsing failed",
                ])),
            )
            .sendLogs("businessProfileFromDbRow: commands parsing failed");
        }
      return {
        id: r,
        automatedType: a,
        welcomeMsgProtocolMode: i,
        prompts: l,
        commands: s,
        commandsDescription: n,
      };
    }
    function M(e) {
      var t = e.commandsDescription,
        n = e.id.toString(),
        r;
      e.automatedType && (r = e.automatedType);
      var o;
      e.welcomeMsgProtocolMode && (o = e.welcomeMsgProtocolMode);
      var a = e.prompts ? JSON.stringify(e.prompts) : void 0,
        i = e.commands ? JSON.stringify(e.commands) : void 0;
      return {
        id: n,
        automatedType: r,
        welcomeMsgProtocolMode: o,
        prompts: a,
        commandsDescription: t,
        commands: i,
      };
    }
    ((l.getBusinessProfileRow = p),
      (l.getBusinessProfileRowLidAware = C),
      (l.getBusinessProfileRecord = v),
      (l.getBusinessProfileRecordLidAware = I),
      (l.createOrMergeBusinessProfileRecordLidAware = $),
      (l.businessProfileFromDbRow = N));
  },
  98,
);
