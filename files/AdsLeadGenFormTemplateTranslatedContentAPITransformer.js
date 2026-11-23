__d(
  "AdsLeadGenFormTemplateTranslatedContentAPITransformer",
  [
    "AdsApiLeadGenLocale",
    "AdsLeadGenFormEditorAPITransformer",
    "AdsLeadGenFormEditorQualifiedQuestionTransformer",
    "AdsLeadGenFormRedesignExperiment",
    "CurrentLocale",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      for (var n = 0; n < t.length; n++)
        ((e[n].label = t[n].label), (e[n].options = t[n].options));
      return e;
    }
    function s(e, t) {
      e.title = t.tagline_or_headline;
      for (var n = 0; n < e.content.length; n++)
        e.content[n] = t.overview_or_description_body;
      return e;
    }
    function u(e, t) {
      return (e.privacy_policy && (e.privacy_policy.link_text = t), e);
    }
    function c(e, t) {
      return e.map(function (e, n) {
        return ((e.header = t[n].header), (e.body = t[n].body), e);
      });
    }
    function d(e, t) {
      if (e != null && e.overview) {
        var n, r, o;
        ((e.overview.body = t.overview_or_description_body),
          (e.tagline = t.tagline_or_headline),
          t.how_it_works_points &&
            e != null &&
            (n = e.how_it_works) != null &&
            n.points &&
            (e.how_it_works.points = c(
              e.how_it_works.points,
              t.how_it_works_points,
            )),
          t.social_proof_points &&
            e != null &&
            (r = e.social_proof) != null &&
            r.points &&
            (e.social_proof.points = c(
              e.social_proof.points,
              t.social_proof_points,
            )),
          t.products_points &&
            e != null &&
            (o = e.services) != null &&
            o.points &&
            (e.services.points = c(e.services.points, t.products_points)));
      }
      return e;
    }
    function m(e, t) {
      return (
        (e.body = t == null ? void 0 : t.thank_you_page_body),
        (e.title = t == null ? void 0 : t.thank_you_page_title),
        (e.button_text = t == null ? void 0 : t.thank_you_page_button_text),
        e
      );
    }
    function p(e, t) {
      return (
        (e.body = t == null ? void 0 : t.disqualified_end_component_body),
        (e.title = t == null ? void 0 : t.disqualified_end_component_title),
        (e.button_text =
          t == null ? void 0 : t.disqualified_end_component_button_text),
        e
      );
    }
    function _(e, t) {
      var n = [];
      if (e != null) for (var r of e) n.push(m(r, t));
      return n;
    }
    function f(e, t) {
      var n = [];
      if (e != null) for (var r of e) n.push(p(r, t));
      return n;
    }
    function g(t, n, a) {
      var i;
      if (
        ((t == null ? void 0 : t.context_card) != null &&
          (t.context_card = s(t.context_card, n == null ? void 0 : n.creative)),
        (t == null ? void 0 : t.legal_content) != null &&
          (t.legal_content = u(
            t.legal_content,
            n == null ? void 0 : n.legal_content_privacy_policy,
          )),
        (n == null ? void 0 : n.questions) != null &&
          (t.questions = e(t.questions, n == null ? void 0 : n.questions)),
        (t == null ? void 0 : t.creative) != null &&
          (t.creative = d(t.creative, n == null ? void 0 : n.creative)),
        (t.locale =
          (i = r("AdsApiLeadGenLocale")[
            String(r("CurrentLocale").get()).toUpperCase()
          ]) != null
            ? i
            : "en_US"),
        (t.question_page_custom_headline =
          n == null ? void 0 : n.question_page_custom_headline),
        (t == null ? void 0 : t.thank_you_page) != null &&
          (t.thank_you_page = m(t.thank_you_page, n)),
        t != null &&
          t.disqualified_end_component &&
          r("AdsLeadGenFormRedesignExperiment").canSeeNewCreationFeature &&
          (t.disqualified_end_component = p(t.disqualified_end_component, n)),
        t != null && t.end_pages)
      ) {
        var l;
        ((t == null ? void 0 : t.end_pages.thank_you_pages) != null &&
          (t.end_pages.thank_you_pages = _(t.end_pages.thank_you_pages, n)),
          t != null &&
            (l = t.end_pages) != null &&
            l.disqualified_end_components &&
            r("AdsLeadGenFormRedesignExperiment").canSeeNewCreationFeature &&
            (t.end_pages.disqualified_end_components = f(
              t.end_pages.disqualified_end_components,
              n,
            )));
      }
      return (
        (t.name = a),
        o(
          "AdsLeadGenFormEditorQualifiedQuestionTransformer",
        ).fromQualifiedQuestionForm(
          o("AdsLeadGenFormEditorAPITransformer").fromAPI(t),
        )
      );
    }
    l.fromAPI = g;
  },
  98,
);
