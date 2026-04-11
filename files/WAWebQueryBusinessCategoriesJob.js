__d(
  "WAWebQueryBusinessCategoriesJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
      "businessCategoriesResponse",
      function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("response"),
          n = [],
          r = "";
        try {
          var o = t.maybeChild("not_a_biz");
          o == null ||
            o.forEachChildWithTag("category", function (e) {
              r = e.attrString("id");
            });
          var a = t.child("categories");
          a.forEachChildWithTag("category", function (e) {
            var t = e.attrString("id"),
              o = e.contentString();
            n.push({
              id: t,
              localized_display_name: o,
              not_a_biz: r.length ? t === r : !1,
            });
          });
        } catch (e) {}
        return { categories: n, notABizId: r };
      },
    );
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = "profile_typeahead",
            a = (n = o("WAWap")).wap(
              "iq",
              {
                to: n.S_WHATSAPP_NET,
                xmlns: "fb:thrift_iq",
                id: n.generateId(),
                type: "get",
              },
              n.wap(
                "request",
                { op: n.CUSTOM_STRING(r), type: "catkit", v: "1" },
                n.wap("query", null, t),
              ),
            ),
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, e);
          if (i.success) return i.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            i.errorCode,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.queryBusinessCategories = s;
  },
  98,
);
