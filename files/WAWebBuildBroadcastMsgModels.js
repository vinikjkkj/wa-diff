__d(
  "WAWebBuildBroadcastMsgModels",
  [
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModelUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.id.id,
        o = e.to,
        a = t.map(function (t) {
          return babelHelpers.extends({}, e, {
            to: t,
            id: new (r("WAWebMsgKey"))({
              fromMe: e.id.fromMe,
              remote: t,
              id: n,
            }),
            broadcast: !0,
            broadcastId: o,
          });
        });
      return {
        mainMessage: babelHelpers.extends({}, e, { recipients: [].concat(t) }),
        messageClones: a,
        broadcastRecipient: e.to,
      };
    }
    function s(e) {
      var t;
      return {
        msgs: [e.mainMessage].concat(e.messageClones),
        chatsIdWithNewMsgs: [e.broadcastRecipient.toString()].concat(
          ((t = e.mainMessage.recipients) == null
            ? void 0
            : t.map(function (e) {
                return e.toString();
              })) || [],
        ),
      };
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaKey,
            n = e.mediaKeyTimestamp;
          if (t != null && n != null) {
            var r = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(e),
              a = {
                deprecatedMms3Url: e.deprecatedMms3Url,
                directPath: e.directPath,
                encFilehash: e.encFilehash,
                filehash: e.filehash,
                mediaKey: t,
                mediaKeyTimestamp: n,
                size: e.size,
              },
              i = [babelHelpers.extends({ id: e.id.toString() }, a)],
              l = [];
            if (r != null)
              for (var s of r) {
                i.push(babelHelpers.extends({ id: s.toString() }, a));
                var u = o("WAWebMsgCollection").MsgCollection.get(s);
                u != null && l.push(u);
              }
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrMerge(i);
            for (var c of l)
              ((c.deprecatedMms3Url = e.deprecatedMms3Url),
                (c.directPath = e.directPath),
                (c.encFilehash = e.encFilehash),
                (c.filehash = e.filehash),
                (c.mediaKey = t),
                (c.mediaKeyTimestamp = n),
                (c.size = e.size));
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.buildBroadcastMsgModelsFromMsgData = e),
      (l.bulkBroadcastMessagesToBulkUpdateInput = s),
      (l.propagateMediaFieldsToBroadcastClones = u));
  },
  98,
);
