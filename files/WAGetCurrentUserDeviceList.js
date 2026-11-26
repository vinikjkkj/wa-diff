__d(
  "WAGetCurrentUserDeviceList",
  [
    "WAAssertUnreachable",
    "WAGlobals",
    "WAJids",
    "WALogger",
    "WASignalKeys",
    "WASmaxDevicesFetchSelfRPC",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      if (t.isCurrentDevice && n.isCurrentDevice)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Two devices were detected as isCurrentDevice in getCurrentUserDeviceList",
              ])),
          ),
          0
        );
      if (t.isCurrentDevice) return -1;
      if (n.isCurrentDevice) return 1;
      if (t.lastSeen != null && n.lastSeen == null) return -1;
      if (t.lastSeen == null && n.lastSeen != null) return 1;
      if (t.lastSeen != null && n.lastSeen != null) {
        var r = t.lastSeen,
          a = n.lastSeen;
        return a.getTime() - r.getTime();
      }
      return 0;
    }
    async function u() {
      var e = await o("WASmaxDevicesFetchSelfRPC").sendFetchSelfRPC();
      switch (e.name) {
        case "FetchSelfResponseError": {
          var t = e.value.errorDeviceIqErrors;
          switch (t.name) {
            case "RetryableIQError":
              throw r("err")("Failed with a retryable error");
            default: {
              t.name;
              var n = t.value.code;
              throw r("err")("Failed with an error code " + n);
            }
          }
        }
        case "FetchSelfResponseSuccess": {
          var a = o("WAJids").extractDeviceId(o("WAGlobals").getMyDeviceJid());
          return e.value.selfDevice
            .map(function (e) {
              var t,
                n,
                i,
                l,
                s,
                u = e.creation,
                c = e.id,
                d = e.identityKeyMixin,
                m = e.ip,
                p = e.location,
                _ = e.manufacturer,
                f = e.model,
                g = e.platform,
                h = e.seen;
              if (d == null)
                throw r("err")("FetchSelf device response is missing identity");
              var y = d.elementValue;
              return {
                creationTime:
                  u == null
                    ? null
                    : o("WATimeUtils").toDate(
                        o("WATimeUtils").castToUnixTime(u.elementValue),
                      ),
                id: o("WAJids").interpretAsDeviceId(c),
                identityKey: o("WASignalKeys").serializeIdentity(y),
                ipAddress:
                  (t = m == null ? void 0 : m.elementValue) != null ? t : null,
                isCurrentDevice: c === a,
                lastSeen:
                  h == null
                    ? null
                    : o("WATimeUtils").toDate(
                        o("WATimeUtils").castToUnixTime(h.elementValue),
                      ),
                latitude: p == null ? null : parseFloat(p.latitude),
                location:
                  (n = p == null ? void 0 : p.elementValue) != null ? n : null,
                longitude: p == null ? null : parseFloat(p.longitude),
                manufacturer:
                  (i = _ == null ? void 0 : _.elementValue) != null ? i : null,
                model:
                  (l = f == null ? void 0 : f.elementValue) != null ? l : null,
                platform:
                  (s = g == null ? void 0 : g.elementValue) != null ? s : null,
              };
            })
            .sort(s);
        }
        default:
          return r("WAAssertUnreachable")(e.name);
      }
    }
    l.getCurrentUserDeviceList = u;
  },
  98,
);
