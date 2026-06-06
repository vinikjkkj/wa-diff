__d(
  "WAWebApiBusinessProfile",
  [
    "invariant",
    "WALogger",
    "WAWebBotTypes",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBusinessProfile",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    async function m(e) {
      return o("WAWebSchemaBusinessProfile").getBusinessProfileTable().get(e);
    }
    async function p(e) {
      var t = o("WAWebWidFactory").createWid(e);
      t.isLid() || s(0, 86986);
      var n = await m(e);
      if (n == null) {
        var r = o("WAWebLidMigrationUtils").toPn(t);
        if (r != null) {
          var a = r.toString(),
            i = await m(a);
          if (i != null) return babelHelpers.extends({}, i, { id: e });
        }
      }
      return n;
    }
    async function _(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WAWebLidMigrationUtils").toLid(t);
      if (n != null) {
        var r = await m(n.toString());
        if (r != null) return babelHelpers.extends({}, r, { id: e });
      }
      return m(e);
    }
    async function f(e) {
      return o("WAWebWidFactory").createWid(e).isLid() ? p(e) : _(e);
    }
    async function g(e) {
      var t = await m(e);
      return t ? S(t) : null;
    }
    async function h(e) {
      var t = await g(e);
      if (t == null) {
        var n = o("WAWebWidFactory").createWid(e),
          r = o("WAWebLidMigrationUtils").toPn(n);
        if (r != null) {
          var a = await g(r.toString());
          if (a != null) return babelHelpers.extends({}, a, { id: n });
        }
      }
      return t;
    }
    async function y(e) {
      var t = o("WAWebWidFactory").createWid(e),
        n = o("WAWebLidMigrationUtils").toLid(t);
      if (n != null) {
        var r = await g(n.toString());
        if (r != null) return babelHelpers.extends({}, r, { id: t });
      }
      return g(e);
    }
    async function C(e) {
      var t = o("WAWebWidFactory").createWid(e);
      return t.isLid() ? h(e) : y(e);
    }
    async function b(e) {
      var t = R(e);
      await o("WAWebSchemaBusinessProfile")
        .getBusinessProfileTable()
        .createOrMerge(t.id, t);
    }
    async function v(e) {
      var t = e.id,
        n = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t);
      return Promise.all(
        n.map(function (t) {
          return b(babelHelpers.extends({}, e, { id: t }));
        }),
      );
    }
    function S(t) {
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
    function R(e) {
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
    ((l.getBusinessProfileRow = m),
      (l.getBusinessProfileRowLidAware = f),
      (l.getBusinessProfileRecord = g),
      (l.getBusinessProfileRecordLidAware = C),
      (l.createOrMergeBusinessProfileRecordLidAware = v),
      (l.businessProfileFromDbRow = S));
  },
  98,
);
