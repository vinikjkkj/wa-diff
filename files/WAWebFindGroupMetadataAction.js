__d(
  "WAWebFindGroupMetadataAction",
  [
    "WALogger",
    "WAWebDBParticipantTypes",
    "WAWebGroupDatabaseJob",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebWamNumberToSizeBucket",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["hasIncompleteParticipantInformation"],
      s,
      u,
      c,
      d,
      m;
    async function p(t) {
      var n = null,
        a = null,
        i = function () {},
        l = r("WAWebGroupMetadataCollection").get(t);
      if (l) {
        if (l.participantQueryPromise)
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "findGroupMetadata: ",
                  " - pending participant query",
                ])),
              t,
            ),
            l.participantQueryPromise.then(function () {
              return { id: t };
            })
          );
        l.participantQueryPromise = new Promise(function (e) {
          i = e;
        });
      } else {
        if (((n = await o("WAWebGroupDatabaseJob").getGroupMetadataJob(t)), !n))
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
        n.subject != null &&
          o("WAWebGroupQueryBridge").updateSubject(t, n.subject);
      }
      try {
        var p, _, f, g, h;
        if (
          (!l || l.stale) &&
          ((a = await o("WAWebGroupDatabaseJob").getGroupParticipantJob(t)), !a)
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
        var y;
        if (n) {
          var C = n,
            b = C.hasIncompleteParticipantInformation,
            v = babelHelpers.objectWithoutPropertiesLoose(C, e);
          y = v;
        }
        var S = babelHelpers.extends({ id: t }, y, {
          participants: (p = a) == null ? void 0 : p.participants,
          pastParticipants: (_ = a) == null ? void 0 : _.pastParticipants,
          deviceStale: a
            ? a.staleType === o("WAWebDBParticipantTypes").STALE_TYPES.DEVICE
            : void 0,
          cachedDeviceCount: (f = a) == null ? void 0 : f.deviceCount,
          cachedDeviceSizeBucket:
            (g = a) != null && g.deviceCount
              ? r("WAWebWamNumberToSizeBucket")(a.deviceCount)
              : null,
        });
        if (
          ((h = a) == null ? void 0 : h.staleType) ===
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
          var R = await o("WAWebGroupQueryBridge").sendQueryGroup(t);
          (R == null ? void 0 : R.participants) != null &&
            (S.participants = R.participants);
        }
        return S;
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
        (i(), l && (l.participantQueryPromise = null));
      }
    }
    l.findGroupMetadata = p;
  },
  98,
);
