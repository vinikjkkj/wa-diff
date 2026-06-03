__d(
  "WAWebCommunityActivityCollection",
  [
    "fbt",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebCommunityActivityModel",
    "WAWebDBMessageStoreUtils",
    "WAWebGroupType",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.listenTo(
            r("WAWebUnjoinedSubgroupMetadataCollection"),
            "add remove change:subject",
            t.$CommunityActivityCollection$p_1,
          ),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.$CommunityActivityCollection$p_1 = function (t) {
          var e = this.findFirst(function (e) {
            var n;
            return (n = e.subgroupId) == null ? void 0 : n.equals(t.id);
          });
          e != null && (e.subgroupName = t.subject);
        }),
        (a.getActivityFor = function (t) {
          return this.filter(function (e) {
            return e.communityId.equals(t);
          });
        }),
        (a.shouldShowTabBadge = function () {
          var e;
          if (this.length === 0) return !1;
          var t =
            (e = o(
              "WAWebUserPrefsMultiDevice",
            ).getCommunityTabLastSeenTimestamp()) != null
              ? e
              : 0;
          return this.some(function (e) {
            return e.timestamp > t;
          });
        }),
        (a.syncActivityFor = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = this,
              a =
                (t = o(
                  "WAWebUserPrefsMultiDevice",
                ).getCommunityTabLastSeenTimestamp()) != null
                  ? t
                  : 0,
              i = yield o("WAWebDBMessageStoreUtils").getMessagesBefore(
                e.toString(),
                function (e) {
                  return (
                    e.t <
                    o("WATimeUtils").unixTime() -
                      o("WAWebCommunityActivityModel")
                        .EXPIRATION_TIME_FOR_SUB_GROUP_LINK
                  );
                },
              );
            i.length !== 0 &&
              i.forEach(function (t) {
                if (t.author != null) {
                  var i = o("WAWebWidFactory").createWidFromWidLike(t.author);
                  if (!o("WAWebUserPrefsMeUser").isMeAccount(i)) {
                    var l = t.t;
                    if (
                      t.subtype ===
                      o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK
                    ) {
                      var u,
                        c,
                        d = o("WAWebWidFactory").createWidFromWidLike(
                          (u = t.templateParams) == null ? void 0 : u[0],
                        ),
                        m =
                          (c = o("WAWebChatCollection").ChatCollection.get(
                            d,
                          )) == null
                            ? void 0
                            : c.formattedTitle;
                      if (m == null) {
                        var p,
                          _,
                          f =
                            (p = r(
                              "WAWebUnjoinedSubgroupMetadataCollection",
                            ).get(d.toString())) == null
                              ? void 0
                              : p.subject,
                          g = (_ = t.templateParams) == null ? void 0 : _[1];
                        f != null
                          ? (m = f)
                          : typeof g == "string"
                            ? (m = g)
                            : (m = s._(/*BTDS*/ "unknown subject").toString());
                      }
                      var h = new (o(
                        "WAWebCommunityActivityModel",
                      ).CommunityActivity)({
                        id: t.id,
                        type: o("WAWebCommunityActivityModel").ActivityTypeType
                          .SUB_GROUP_LINK,
                        communityId: e,
                        timestamp: l,
                        subgroupName: m,
                        subgroupId: d,
                      });
                      n.addDeduppedSubgroupLink([h]);
                    } else
                      t.subtype === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
                        l > a &&
                        n.add({
                          id: e.toString(),
                          communityId: e,
                          timestamp: l,
                          type: o("WAWebCommunityActivityModel")
                            .ActivityTypeType.NEW_COMMUNITY,
                        });
                  }
                }
              });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.addDeduppedSubgroupLink = function (t) {
          var e = this,
            n = t.filter(function (t) {
              return !e.some(function (e) {
                var n;
                return (n = e.subgroupId) == null
                  ? void 0
                  : n.equals(t.subgroupId);
              });
            });
          return this.add(n);
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebCommunityActivityModel").CommunityActivity),
      (e.comparator = function (e, t) {
        return e.timestamp - t.timestamp;
      }));
    var u = new e();
    l.default = u;
  },
  226,
);
