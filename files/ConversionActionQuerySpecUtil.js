__d(
  "ConversionActionQuerySpecUtil",
  ["TypeCoercionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $;
      t === void 0 && (t = { useDefaultDataSet: !1 });
      var P =
        ((n = t) == null ? void 0 : n.useDefaultDataSet) === !0
          ? e.datasets
          : e.consolidated_datasets;
      return {
        "action.type":
          (r = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.action_type_names,
          )) != null
            ? r
            : void 0,
        application: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.application_ids,
        ),
        conversion_id:
          (a = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.conversion_id,
          )) != null
            ? a
            : void 0,
        creative:
          (i = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.creative_ids,
          )) != null
            ? i
            : void 0,
        custom_conversion:
          (l = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.custom_conversion,
          )) != null
            ? l
            : void 0,
        dataset:
          (s = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(P)) != null
            ? s
            : void 0,
        dataset_split:
          (u = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.dataset_split,
          )) != null
            ? u
            : void 0,
        event:
          (c = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(e.event)) !=
          null
            ? c
            : void 0,
        event_type:
          (d = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.event_type,
          )) != null
            ? d
            : void 0,
        "event.creator":
          (m = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.event_creator,
          )) != null
            ? m
            : void 0,
        fb_pixel: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.fb_pixel_ids,
        ),
        fb_pixel_event:
          (p = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.fb_pixel_event,
          )) != null
            ? p
            : void 0,
        leadgen:
          (_ = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.leadgen_ids,
          )) != null
            ? _
            : void 0,
        object:
          (f = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(e.object)) !=
          null
            ? f
            : void 0,
        "object.domain":
          (g = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.object_domain,
          )) != null
            ? g
            : void 0,
        offer:
          (h = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(e.offer)) !=
          null
            ? h
            : void 0,
        "offer.creator":
          (y = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.offer_creator,
          )) != null
            ? y
            : void 0,
        offsite_pixel:
          (C = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.offsite_pixel,
          )) != null
            ? C
            : void 0,
        page:
          (b = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(e.page)) !=
          null
            ? b
            : void 0,
        "page.parent":
          (v = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.page_parent,
          )) != null
            ? v
            : void 0,
        partner_account_link:
          (S = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.partner_account_link.map(function (e) {
              return e.toString();
            }),
          )) != null
            ? S
            : void 0,
        post:
          (R = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(e.post)) !=
          null
            ? R
            : void 0,
        "post.object":
          (L = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.post_object,
          )) != null
            ? L
            : void 0,
        "post.object.wall":
          (E = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.post_object_wall,
          )) != null
            ? E
            : void 0,
        "post.wall":
          (k = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.post_wall,
          )) != null
            ? k
            : void 0,
        product_set:
          (I = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.product_set,
          )) != null
            ? I
            : void 0,
        question:
          (T = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.question,
          )) != null
            ? T
            : void 0,
        "question.creator":
          (D = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.question_creator,
          )) != null
            ? D
            : void 0,
        response:
          (x = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.responses,
          )) != null
            ? x
            : void 0,
        subtype:
          ($ = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.subtypes,
          )) != null
            ? $
            : void 0,
      };
    }
    function s(e) {
      return Array.isArray(e) ? e : void 0;
    }
    function u(e) {
      return {
        "action.type": s(e["action.type"]),
        application: e.application,
        conversion_id: s(e.conversion_id),
        creative: s(e.creative),
        custom_conversion: s(e.custom_conversion),
        dataset: s(e.dataset),
        dataset_split: s(e.dataset_split),
        event: s(e.event),
        "event.creator": s(e["event.creator"]),
        fb_pixel: s(e.fb_pixel),
        object: s(e.object),
        "object.domain": s(e["object.domain"]),
        offer: s(e.offer),
        "offer.creator": s(e["offer.creator"]),
        offsite_pixel: s(e.offsite_pixel),
        page: s(e.page),
        "page.parent": s(e["page.parent"]),
        post: s(e.post),
        "post.object": s(e["post.object"]),
        "post.object.wall": s(e["post.object.wall"]),
        "post.wall": s(e["post.wall"]),
        product: void 0,
        question: s(e.question),
        "question.creator": s(e["question.creator"]),
        response: s(e.response),
        song: void 0,
        subtype: s(e.subtype),
      };
    }
    ((l.coerceGraphQLSpecToGraphAPI = e),
      (l.coerceActionSpecDefaultFromConversionActionQuerySpec = u));
  },
  98,
);
