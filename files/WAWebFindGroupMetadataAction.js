__d(
  "WAWebFindGroupMetadataAction",
  [
    "Promise",
    "WALogger",
    "WAWebDBParticipantTypes",
    "WAWebGroupDatabaseJob",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebWamNumberToSizeBucket",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["hasIncompleteParticipantInformation"],
      s,
      u,
      c,
      d,
      m,
      p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = null,
            i = null,
            l = function () {},
            _ = r("WAWebGroupMetadataCollection").get(t);
          if (_) {
            if (_.participantQueryPromise)
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "findGroupMetadata: ",
                      " - pending participant query",
                    ])),
                  t,
                ),
                _.participantQueryPromise.then(function () {
                  return { id: t };
                })
              );
            _.participantQueryPromise = new (p || (p = n("Promise")))(function (
              e,
            ) {
              l = e;
            });
          } else {
            if (
              ((a = yield o("WAWebGroupDatabaseJob").getGroupMetadataJob(t)),
              !a)
            )
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "findGroupMetadata: ",
                      " - query missing group participant",
                    ])),
                  t,
                ),
                o("WAWebGroupQueryBridge").sendQueryGroup(t)
              );
            a.subject != null &&
              o("WAWebGroupQueryBridge").updateSubject(t, a.subject);
          }
          try {
            var f, g, h, y, C;
            if (
              (!_ || _.stale) &&
              ((i = yield o("WAWebGroupDatabaseJob").getGroupParticipantJob(t)),
              !i)
            )
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "findGroupMetadata: ",
                      " - query missing group participant",
                    ])),
                  t,
                ),
                o("WAWebGroupQueryBridge").sendQueryGroup(t)
              );
            var b;
            if (a) {
              var v = a,
                S = v.hasIncompleteParticipantInformation,
                R = babelHelpers.objectWithoutPropertiesLoose(v, e);
              b = R;
            }
            var L = babelHelpers.extends({ id: t }, b, {
              participants: (f = i) == null ? void 0 : f.participants,
              pastParticipants: (g = i) == null ? void 0 : g.pastParticipants,
              deviceStale: i
                ? i.staleType ===
                  o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE
                : void 0,
              cachedDeviceCount: (h = i) == null ? void 0 : h.deviceCount,
              cachedDeviceSizeBucket:
                (y = i) != null && y.deviceCount
                  ? r("WAWebWamNumberToSizeBucket")(i.deviceCount)
                  : null,
            });
            if (
              ((C = i) == null ? void 0 : C.staleType) ===
              o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT
            ) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "findGroupMetadata: ",
                    " - query stale group participant",
                  ])),
                t,
              );
              var E = yield o("WAWebGroupQueryBridge").sendQueryGroup(t);
              (E == null ? void 0 : E.participants) != null &&
                (L.participants = E.participants);
            }
            return L;
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "findGroupMetadata: ",
                    " - query group participant error: ",
                    "",
                  ])),
                t,
                e,
              ),
              e
            );
          } finally {
            (l(), _ && (_.participantQueryPromise = null));
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.findGroupMetadata = _;
  },
  98,
);
