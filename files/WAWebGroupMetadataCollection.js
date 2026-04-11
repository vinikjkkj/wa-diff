__d(
  "WAWebGroupMetadataCollection",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebFindGroupMetadataAction",
    "WAWebGroupMetadataModel",
    "WAWebIsCagGroupCache",
    "WAWebProfilePicThumbCollection",
    "WAWebStaleBaseCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function a() {
          var a;
          return (
            (a = t.call(this) || this),
            (a._handleIsParentGroupChange = function (e) {
              e.isParentGroup === !0 &&
                o(
                  "WAWebProfilePicThumbCollection",
                ).ProfilePicThumbCollection.update(e.id);
            }),
            (a.findImpl = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  if (r("WAWebWid").isGroup(t)) {
                    var a,
                      i = o("WAWebChatCollection").ChatCollection.get(t);
                    return i != null &&
                      i.isReadOnly &&
                      (i == null || (a = i.groupMetadata) == null
                        ? void 0
                        : a.stale) === !1
                      ? (o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "groupMetadata: skip trying to find groupMetadata wid ",
                              "",
                            ])),
                          t.toString(),
                        ),
                        (u || (u = n("Promise"))).resolve({ id: t }))
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
                    (u || (u = n("Promise"))).reject(
                      r("err")(
                        "groupMetadata:find trying to fetch non-group wid " +
                          t.toString(),
                      ),
                    )
                  );
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            a.listenTo(a, "add", a._handleGroupAdd),
            a.listenTo(a, "remove", a._handleGroupRemove),
            a.listenTo(a, "change:parentGroup", a._handleParentGroupChange),
            a.listenTo(a, "change:isParentGroup", a._handleIsParentGroupChange),
            a.listenTo(
              a,
              "change:defaultSubgroup",
              a._handleDefaultSubgroupChange,
            ),
            a
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i._handleGroupAdd = function (t) {
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
          (i._handleGroupRemove = function (t) {
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
          (i._handleParentGroupChange = function (t, n, r) {
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
          (i._handleDefaultSubgroupChange = function (t, n) {
            n === !0
              ? r("WAWebIsCagGroupCache").add(t.id)
              : r("WAWebIsCagGroupCache").remove(t.id);
          }),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = r("WAWebGroupMetadataModel");
    var d = new c();
    l.default = d;
  },
  98,
);
