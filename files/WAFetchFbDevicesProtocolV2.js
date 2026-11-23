__d(
  "WAFetchFbDevicesProtocolV2",
  [
    "WAArrayChunk",
    "WAJids",
    "WALoadContactsApi",
    "WARPCAbortController",
    "WASignalKeys",
    "WASmaxDevicesFetchRPC",
    "WATagsLogger",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 25,
      c = 1e4,
      d = o("WATagsLogger").TAGS(["wa-devices-protocol"]);
    async function m(e, t) {
      if (e.length === 0) return new Map();
      var n = await p(e, t),
        r = o("WAArrayChunk").chunk(
          e.map(function (e) {
            var t = n.get(e),
              r = t != null ? { anyDhash: t } : null;
            return { userJid: e, dhashMixinArgs: r };
          }),
          u,
        ),
        a = new Map();
      return (
        await Promise.allSettled(
          r.map(function (e) {
            return _(a, e);
          }),
        ),
        a
      );
    }
    async function p(e, t) {
      if (t) return new Map();
      var n = await o("WALoadContactsApi").loadContacts(e),
        r = new Map();
      return (
        n.forEach(function (e) {
          e && e.dhash != null && r.set(e.contactJid, e.dhash);
        }),
        r
      );
    }
    async function _(t, n) {
      try {
        var a = new Set(
            n.map(function (e) {
              return e.userJid;
            }),
          ),
          i = await o("WARPCAbortController").rpcAbortController(
            o("WASmaxDevicesFetchRPC").sendFetchRPC({ userArgs: n }),
            c,
          );
        if (i.name === "FetchResponseError")
          throw r("err")("Failed to fetch user devices");
        (i.value.usersUser.map(function (e) {
          var n = e.userResponses;
          if (n.name !== "FetchUserResponseFailure") {
            var r = n.value,
              i = r.devices,
              l = r.jid;
            (a.delete(l),
              t.set(l, {
                newState: f(l, i, o("WATimeUtils").unixTime()),
                stateIsUpToDate: !1,
              }));
          }
        }),
          a.forEach(function (e) {
            t.set(e, { stateIsUpToDate: !0 });
          }));
      } catch (t) {
        if (t === o("WARPCAbortController").RPC_TIMEOUT) {
          d.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Timeout for fetchAndSaveDevices",
              ])),
          );
          return;
        }
        d.ERROR(
          s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          t,
        );
      }
    }
    function f(e, t, n) {
      n === void 0 && (n = null);
      var r = [],
        a = null;
      if (t) {
        var i;
        ((r = t.device.map(function (e) {
          var t, n;
          return {
            id: o("WAJids").interpretAsDeviceId(e.id),
            identity: o("WASignalKeys").serializeIdentity(e.elementValue),
            platform:
              (t = e.deviceModelInfoMixin) == null || (t = t.platform) == null
                ? void 0
                : t.elementValue,
            model:
              (n = e.deviceModelInfoMixin) == null || (n = n.model) == null
                ? void 0
                : n.elementValue,
          };
        })),
          (a = (i = t.dhashMixin) == null ? void 0 : i.dhash));
      }
      return {
        jid: e,
        devices: r,
        lastSyncTs: o("WATimeUtils").unixTime(),
        dhash: a,
        notificationTs: n,
      };
    }
    l.fetchFbDevicesProtocol = m;
  },
  98,
);
