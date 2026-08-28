__d(
  "AdInteractiveComponentSpecUtil",
  [
    "CallToActionLinkFormats",
    "CallToActionTypes",
    "TypeCoercionUtils",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        child_attachments: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.child_attachments.map(function (e) {
            return { child_attachments: void 0, components: s(e.components) };
          }),
        ),
        components: s(e.components),
      };
    }
    function s(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          var t,
            n,
            a,
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
            $,
            P,
            N,
            M,
            w,
            A,
            F,
            O,
            B,
            W,
            q;
          return {
            countdown_spec: o("TypeCoercionUtils").coerceObjectToUndefined({
              end_time:
                (t = (n = e.countdown_spec) == null ? void 0 : n.end_time) !=
                null
                  ? t
                  : void 0,
              title:
                (a = (l = e.countdown_spec) == null ? void 0 : l.title) != null
                  ? a
                  : void 0,
            }),
            cta_sticker_spec: o("TypeCoercionUtils").coerceObjectToUndefined({
              background_opacity:
                (s =
                  (u = e.cta_sticker_spec) == null
                    ? void 0
                    : u.background_opacity) != null
                  ? s
                  : void 0,
              icon_color:
                (c =
                  (d = e.cta_sticker_spec) == null ? void 0 : d.icon_color) !=
                null
                  ? c
                  : void 0,
              text_color:
                (m =
                  (p = e.cta_sticker_spec) == null ? void 0 : p.text_color) !=
                null
                  ? m
                  : void 0,
              text_size:
                (_ = (f = e.cta_sticker_spec) == null ? void 0 : f.text_size) !=
                null
                  ? _
                  : void 0,
            }),
            poll_spec: o("TypeCoercionUtils").coerceObjectToUndefined({
              link_display:
                (g = (h = e.poll_spec) == null ? void 0 : h.link_display) !=
                null
                  ? g
                  : void 0,
              option_a_call_to_action:
                (y = e.poll_spec) != null && y.option_a_call_to_action
                  ? {
                      type: o("TypeCoercionUtils").coerceNonMaybeValue(
                        r("getJSEnumSafe")(
                          r("CallToActionTypes"),
                          (C = e.poll_spec) == null
                            ? void 0
                            : C.option_a_call_to_action.type,
                        ),
                        "components[].poll_spec.option_a_call_to_action.type",
                        i.id,
                      ),
                      value: {
                        link: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (b = e.poll_spec) == null ||
                            (b = b.option_a_call_to_action) == null ||
                            (b = b.value) == null
                            ? void 0
                            : b.link,
                          "components[].poll_spec.option_a_call_to_action.value.link",
                          i.id,
                        ),
                        link_format: o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerce(
                            o("TypeCoercionUtils").coerceNonMaybeValue(
                              (v = e.poll_spec) == null ||
                                (v = v.option_a_call_to_action) == null ||
                                (v = v.value) == null
                                ? void 0
                                : v.link_format,
                              "components[].poll_spec.option_a_call_to_action.value.link_format",
                              i.id,
                            ),
                            r("CallToActionLinkFormats"),
                          ),
                          "components[].poll_spec.option_a_call_to_action.value.link_format",
                          i.id,
                        ),
                      },
                    }
                  : void 0,
              option_a_text:
                (S = (R = e.poll_spec) == null ? void 0 : R.option_a_text) !=
                null
                  ? S
                  : void 0,
              option_b_call_to_action:
                (L = e.poll_spec) != null && L.option_b_call_to_action
                  ? {
                      type: o("TypeCoercionUtils").coerceNonMaybeValue(
                        r("getJSEnumSafe")(
                          r("CallToActionTypes"),
                          (E = e.poll_spec) == null
                            ? void 0
                            : E.option_b_call_to_action.type,
                        ),
                        "components[].poll_spec.option_b_call_to_action.type",
                        i.id,
                      ),
                      value: {
                        link: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (k = e.poll_spec) == null ||
                            (k = k.option_b_call_to_action) == null ||
                            (k = k.value) == null
                            ? void 0
                            : k.link,
                          "components[].poll_spec.option_b_call_to_action.value.link",
                          i.id,
                        ),
                        link_format: o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerce(
                            o("TypeCoercionUtils").coerceNonMaybeValue(
                              (I = e.poll_spec) == null ||
                                (I = I.option_b_call_to_action) == null ||
                                (I = I.value) == null
                                ? void 0
                                : I.link_format,
                              "components[].poll_spec.option_b_call_to_action.value.link_format",
                              i.id,
                            ),
                            r("CallToActionLinkFormats"),
                          ),
                          "components[].poll_spec.option_b_call_to_action.value.link_format",
                          i.id,
                        ),
                      },
                    }
                  : void 0,
              option_b_text:
                (T = (D = e.poll_spec) == null ? void 0 : D.option_b_text) !=
                null
                  ? T
                  : void 0,
              question_text:
                (x = ($ = e.poll_spec) == null ? void 0 : $.question_text) !=
                null
                  ? x
                  : void 0,
              theme_color:
                (P = (N = e.poll_spec) == null ? void 0 : N.theme_color) != null
                  ? P
                  : void 0,
            }),
            position_spec: o("TypeCoercionUtils").coerceObjectToUndefined({
              height: o("TypeCoercionUtils").coerceMaybeStringToNumber(
                (M = e.position_spec) == null ? void 0 : M.height,
              ),
              rotation: o("TypeCoercionUtils").coerceMaybeStringToNumber(
                (w = e.position_spec) == null ? void 0 : w.rotation,
              ),
              width: o("TypeCoercionUtils").coerceMaybeStringToNumber(
                (A = e.position_spec) == null ? void 0 : A.width,
              ),
              x: o("TypeCoercionUtils").coerceMaybeStringToNumber(
                (F = e.position_spec) == null ? void 0 : F.x,
              ),
              y: o("TypeCoercionUtils").coerceMaybeStringToNumber(
                (O = e.position_spec) == null ? void 0 : O.y,
              ),
            }),
            product_tag_spec: o("TypeCoercionUtils").coerceObjectToUndefined({
              product_id:
                (B =
                  (W = e.product_tag_spec) == null ? void 0 : W.product_id) !=
                null
                  ? B
                  : void 0,
            }),
            type: (q = e.type) != null ? q : void 0,
          };
        }),
      );
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
