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
      var t = b(e);
      await o("WAWebSchemaBusinessProfile")
        .getBusinessProfileTable()
        .createOrMerge(t.id, t);
    }
    async function h(e) {
      var t,
        n = e.id,
        r = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(n),
        a = (t = e.pills) != null ? t : r.length > 1 ? await y(r) : void 0;
      return Promise.all(
        r.map(function (t) {
          return g(babelHelpers.extends({}, e, { id: t, pills: a }));
        }),
      );
    }
    async function y(e) {
      var t,
        n,
        r = await o("WAWebSchemaBusinessProfile")
          .getBusinessProfileTable()
          .bulkGet(
            e.map(function (e) {
              return e.toString();
            }),
          );
      return (t =
        (n = r.find(function (e) {
          return (e == null ? void 0 : e.pills) != null;
        })) == null
          ? void 0
          : n.pills) != null
        ? t
        : void 0;
    }
    function C(t) {
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
    function b(e) {
      var t = e.commandsDescription,
        n = e.id.toString(),
        r;
      e.automatedType && (r = e.automatedType);
      var o;
      e.welcomeMsgProtocolMode && (o = e.welcomeMsgProtocolMode);
      var a = e.prompts ? JSON.stringify(e.prompts) : void 0,
        i = e.commands ? JSON.stringify(e.commands) : void 0;
      return babelHelpers.extends(
        {
          id: n,
          automatedType: r,
          welcomeMsgProtocolMode: o,
          prompts: a,
          commandsDescription: t,
          commands: i,
        },
        e.pills != null ? { pills: e.pills } : null,
      );
    }
    ((l.getBusinessProfileRow = m),
      (l.getBusinessProfileRowLidAware = f),
      (l.createOrMergeBusinessProfileRecordLidAware = h),
      (l.businessProfileFromDbRow = C));
  },
  98,
);
