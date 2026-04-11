__d(
  "WAWebHandleServerNotification",
  [
    "$InternalEnum",
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebAbPropsSyncJob",
    "WAWebCrashlog",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({ LOG: "log", ABPROPS: "abprops" }),
      d = new (r("WADeprecatedWapParser"))(
        "incomingServerNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t = e.attrString("id"),
            n = e.attrWapJid("from");
          if (e.hasChild(c.LOG)) {
            var r = e.child(c.LOG),
              o = r.hasAttr("bug_id") ? r.attrString("bug_id") : null,
              a = r.hasAttr("is_bug_reporter")
                ? r.attrString("is_bug_reporter") === "true"
                : !1;
            return {
              type: c.LOG,
              stanzaId: t,
              from: n,
              bugId: o,
              isReporter: a,
            };
          }
          return e.hasChild(c.ABPROPS)
            ? { type: c.ABPROPS, stanzaId: t, from: n }
            : { type: null, stanzaId: t, from: n };
        },
      );
    function m(t) {
      var r = o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(t.stanzaId),
        class: "notification",
        type: "server",
        to: t.from,
      });
      if (t.type == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[server-notif] unsupported type, ack-ing",
              ])),
          ),
          (u || (u = n("Promise"))).resolve(r)
        );
      switch (t.type) {
        case c.LOG:
          return (
            o("WAWebCrashlog").upload({
              reason: o("WAWebCrashlog").SERVER_REQUESTED,
              immediate: !0,
              isHighPri: !0,
              bugId: t.bugId,
              isReporter: t.isReporter,
            }),
            (u || (u = n("Promise"))).resolve(r)
          );
        case c.ABPROPS:
          return o("WAWebAbPropsSyncJob")
            .syncABPropsTask({ shouldSendHash: !1 })
            .then(function () {
              return r;
            });
      }
    }
    function p(e) {
      var t = d.parse(e);
      return t.error
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          (u || (u = n("Promise"))).reject(t.error))
        : m(t.success);
    }
    l.handleServerNotification = p;
  },
  98,
);
