__d(
  "WAWebGroupMetadataCollection",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebFindGroupMetadataAction",
    "WAWebGroupMetadataModel",
    "WAWebIsCagGroupCache",
    "WAWebProfilePicThumbCollection",
    "WAWebStaleBaseCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this) || this),
            (n._handleIsParentGroupChange = function (e) {
              e.isParentGroup === !0 &&
                o(
                  "WAWebProfilePicThumbCollection",
                ).ProfilePicThumbCollection.update(e.id);
            }),
            (n.findImpl = async function (t) {
              if (r("WAWebWid").isGroup(t)) {
                var n,
                  a = o("WAWebChatCollection").ChatCollection.get(t);
                return a != null &&
                  a.isReadOnly &&
                  (a == null || (n = a.groupMetadata) == null
                    ? void 0
                    : n.stale) === !1
                  ? (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "groupMetadata: skip trying to find groupMetadata wid ",
                          "",
                        ])),
                      t.toString(),
                    ),
                    Promise.resolve({ id: t }))
                  : o("WAWebFindGroupMetadataAction")
                      .findGroupMetadata(t)
                      .then(function (e) {
                        return e == null ? e : babelHelpers.extends({}, e);
                      });
              }
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "groupMetadata:find trying to fetch non-group wid ",
                      "",
                    ])),
                  t.toString(),
                ),
                Promise.reject(
                  r("err")(
                    "groupMetadata:find trying to fetch non-group wid " +
                      t.toString(),
                  ),
                )
              );
            }),
            n.listenTo(n, "add", n._handleGroupAdd),
            n.listenTo(n, "remove", n._handleGroupRemove),
            n.listenTo(n, "change:parentGroup", n._handleParentGroupChange),
            n.listenTo(n, "change:isParentGroup", n._handleIsParentGroupChange),
            n.listenTo(
              n,
              "change:defaultSubgroup",
              n._handleDefaultSubgroupChange,
            ),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a._handleGroupAdd = function (t) {
            if (
              (t.defaultSubgroup === !0 && r("WAWebIsCagGroupCache").add(t.id),
              !!t.participants.iAmMember())
            ) {
              var e = t.parentGroup ? this.get(t.parentGroup.toString()) : null;
              if (e != null) {
                var n = t.id;
                o(
                  "WAWebUpdateSubgroupsCommunityAction",
                ).subgroupUnjoinedToJoined(e, n);
              }
            }
          }),
          (a._handleGroupRemove = function (t) {
            if (
              (t.defaultSubgroup === !0 &&
                r("WAWebIsCagGroupCache").remove(t.id),
              !!t.participants.iAmMember())
            ) {
              var e = t.parentGroup ? this.get(t.parentGroup.toString()) : null;
              e != null &&
                o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroups(
                  e,
                );
            }
          }),
          (a._handleParentGroupChange = function (t, n, r) {
            if (t.participants.iAmMember()) {
              var e = t.id,
                a = n != null ? this.get(n.toString()) : null,
                i = r != null ? this.get(r.toString()) : null;
              a != null
                ? (o(
                    "WAWebUpdateSubgroupsCommunityAction",
                  ).subgroupUnjoinedToJoined(a, e),
                  i != null &&
                    o(
                      "WAWebUpdateSubgroupsCommunityAction",
                    ).updateJoinedSubgroups(i))
                : i != null &&
                  o("WAWebUpdateSubgroupsCommunityAction").unlinkParentGroup(
                    i,
                    e,
                  );
            }
          }),
          (a._handleDefaultSubgroupChange = function (t, n) {
            n === !0
              ? r("WAWebIsCagGroupCache").add(t.id)
              : r("WAWebIsCagGroupCache").remove(t.id);
          }),
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = r("WAWebGroupMetadataModel");
    var c = new u();
    l.default = c;
  },
  98,
);
