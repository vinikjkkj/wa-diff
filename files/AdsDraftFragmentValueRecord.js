__d(
  "AdsDraftFragmentValueRecord",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignPaths",
    "AdsAPIDraftFragmentValuePaths",
    "AdsInterfacesLogger",
    "getByPath",
    "getErrorSafe",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["marketing_message_channels"],
      s,
      u,
      c = "PRE_2020_ELECTORAL_DISTRICT",
      d = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getChangedFields = function (t) {
            return (
              t === void 0 && (t = r("immutable").Set()),
              this.$AdsDraftFragmentValueRecord$p_1 ||
                (this.$AdsDraftFragmentValueRecord$p_1 =
                  this.$AdsDraftFragmentValueRecord$p_2(
                    t,
                    this.oldValue,
                    this.newValue,
                    this.field,
                  )),
              this.$AdsDraftFragmentValueRecord$p_1
            );
          }),
          (o.getNonMemoizedChangedFields_FOR_LOGGING_ONLY = function () {
            return this.$AdsDraftFragmentValueRecord$p_2(
              r("immutable").Set(),
              this.oldValue,
              this.newValue,
              this.field,
            );
          }),
          (o.$AdsDraftFragmentValueRecord$p_2 = function (t, n, o, a) {
            var e = this,
              i = t;
            if (r("immutable").is(n, o)) return i;
            var l = r("immutable").Map.isMap(n),
              s = r("immutable").Map.isMap(o),
              u = r("immutable").List.isList(n),
              c = r("immutable").List.isList(o),
              d = !1;
            return (
              (s || c) &&
                (o.forEach(function (t, r) {
                  var o = l || u ? n.get(r) : null;
                  i = e.$AdsDraftFragmentValueRecord$p_2(
                    i,
                    o,
                    t,
                    s ? a + "." + r : a,
                  );
                }),
                (d = !0)),
              (l || u) &&
                (n.forEach(function (t, n) {
                  var r = s || c ? o.get(n) : null;
                  i = e.$AdsDraftFragmentValueRecord$p_2(
                    i,
                    t,
                    r,
                    l ? a + "." + n : a,
                  );
                }),
                (d = !0)),
              d ? i : i.add(a)
            );
          }),
          (o.toAPI = function () {
            var e;
            return (
              (e = {}),
              (e.field = this.field),
              (e.old_value =
                this.oldValue && this.oldValue.toJS
                  ? this.oldValue.toJS()
                  : this.oldValue),
              (e.new_value =
                this.newValue && this.newValue.toJS
                  ? this.newValue.toJS()
                  : this.newValue),
              e
            );
          }),
          (n.fromAPI = function (t) {
            var e = r("getByPath")(t, r("AdsAPIDraftFragmentValuePaths").FIELD);
            try {
              var o = n.$AdsDraftFragmentValueRecord$p_3(
                  e,
                  t,
                  r("AdsAPIDraftFragmentValuePaths").OLD_VALUE,
                ),
                a = n.$AdsDraftFragmentValueRecord$p_3(
                  e,
                  t,
                  r("AdsAPIDraftFragmentValuePaths").NEW_VALUE,
                );
              return new n({
                field: e,
                oldValue: r("immutable").fromJS(o),
                newValue: m(e, r("immutable").fromJS(a)),
              });
            } catch (e) {
              var i = r("getErrorSafe")(e);
              return (
                r("AdsInterfacesLogger").log(
                  {
                    eventName: "draft_fragment_value_invalid_json",
                    eventCategory: "errors",
                    data: {
                      error_data: JSON.stringify({ rawValue: t }),
                      error_message: i.message,
                      error_type: i.name,
                      stack_trace: i.stack,
                    },
                  },
                  r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
                ),
                null
              );
            }
          }),
          (n.$AdsDraftFragmentValueRecord$p_3 = function (t, o, a) {
            var e = r("getByPath")(o, a);
            if (e !== void 0) {
              var i = n.$AdsDraftFragmentValueRecord$p_4(t, JSON.parse(e));
              return ((i = n.$AdsDraftFragmentValueRecord$p_5(t, i)), i);
            }
          }),
          (n.$AdsDraftFragmentValueRecord$p_5 = function (n, r) {
            if (
              n !== "targeting" ||
              (r == null ? void 0 : r.marketing_message_channels) == null
            )
              return r;
            var t = r.marketing_message_channels,
              o = babelHelpers.objectWithoutPropertiesLoose(r, e),
              a = Object.entries(t).reduce(function (e, t) {
                var n = t[0],
                  r = t[1];
                switch (n) {
                  case "whatsapp":
                    return babelHelpers.extends({}, e, {
                      whatsapp_subscriber_source: r,
                    });
                }
              }, {});
            return babelHelpers.extends({}, o, { subscriber_universe: a });
          }),
          (n.$AdsDraftFragmentValueRecord$p_4 = function (t, r) {
            var e, o;
            if (
              t !== "targeting" ||
              (r == null || (e = r.geo_locations) == null
                ? void 0
                : e.electoral_districts) == null
            )
              return r;
            var a = babelHelpers.extends({}, r);
            return (
              a == null ||
                (o = a.geo_locations) == null ||
                o.electoral_districts.forEach(function (e) {
                  n.$AdsDraftFragmentValueRecord$p_6(
                    e == null ? void 0 : e.key,
                  ) && (e.deprecation_code = c);
                }),
              a
            );
          }),
          (n.$AdsDraftFragmentValueRecord$p_6 = function (t) {
            var e = (t != null ? t : "").split(":");
            return e.length === 2;
          }),
          n
        );
      })(
        r("immutable").Record({ field: null, oldValue: null, newValue: null }),
      );
    function m(e, t) {
      var n = t;
      try {
        return _.has(e)
          ? r("immutable").List.isList(n) && n.size === 0
            ? r("immutable").Map()
            : (r("immutable").Map.isMap(n) &&
                f.forEach(function (e) {
                  var t = n.getIn(e);
                  if (r("immutable").List.isList(t))
                    if (t.size === 0) n = n.setIn(e, r("immutable").Map());
                    else
                      for (var o = 0; o < t.size; o++) {
                        var a = e.concat(o + ""),
                          i = n.getIn(a);
                        r("immutable").List.isList(i) &&
                          i.size === 0 &&
                          (n = n.setIn(a, r("immutable").Map()));
                      }
                }),
              n)
          : n;
      } catch (t) {
        var o = r("getErrorSafe")(t);
        return (
          r("AdsInterfacesLogger").log(
            {
              eventName: "draft_fragment_value_php_clowntown",
              eventCategory: "errors",
              data: {
                error_data: JSON.stringify({
                  fieldName: e,
                  rootValue: n.toJS ? n.toJS() : n,
                }),
                error_message: o.message,
                error_type: o.name,
                stack_trace: o.stack,
              },
            },
            r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
          ),
          n
        );
      }
    }
    var p = r("immutable").List([
        (s = r("AdsAPIAdgroupPaths")).CREATIVE.OBJECT_STORY_SPEC.path,
        s.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.path,
        s.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CALL_TO_ACTION.VALUE.path,
        s.CREATIVE.OBJECT_STORY_SPEC.OFFER_DATA.path,
        s.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.path,
        s.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.path,
        s.CREATIVE.OBJECT_STORY_SPEC.TEXT_DATA.path,
        s.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.path,
        s.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CHILD_ATTACHMENTS,
        s.CREATIVE.PLATFORM_CUSTOMIZATIONS.INSTAGRAM.path,
        ["brand_configuration"],
        ["promoted_object"],
        s.CREATIVE.FACEBOOK_BRANDED_CONTENT.path,
        s.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.path,
        (u = r("AdsAPICampaignPaths")).TARGETING.MARKETING_MESSAGE_CHANNELS
          .path,
        u.TARGETING.MARKETING_MESSAGE_CHANNELS.WHATSAPP.path,
        u.TARGETING.SUBSCRIBER_UNIVERSE.path,
        u.TARGETING.SUBSCRIBER_UNIVERSE.MESSENGER_SUBSCRIBER_SOURCE.path,
        u.TARGETING.SUBSCRIBER_UNIVERSE.WHATSAPP_SUBSCRIBER_SOURCE.path,
        u.TARGETING.SUBSCRIBER_UNIVERSE.WHATSAPP_SUBSCRIBER_POOL.path,
        u.TARGETING.SUBSCRIBER_UNIVERSE.MESSENGER_SUBSCRIBER_POOL.path,
        s.CREATIVE.MEDIA_SOURCING_SPEC.path,
        s.CREATIVE.MEDIA_SOURCING_SPEC.RELATED_MEDIA.path,
        s.CREATIVE.ASSET_FEED_SPEC.CALL_ADS_CONFIGURATION.path,
        u.CALLING_SETTINGS.path,
      ]),
      _ = p
        .map(function (e) {
          return e[0];
        })
        .toSet(),
      f = p
        .map(function (e) {
          return e.slice(1);
        })
        .filter(function (e) {
          return e.length !== 0;
        });
    l.default = d;
  },
  98,
);
