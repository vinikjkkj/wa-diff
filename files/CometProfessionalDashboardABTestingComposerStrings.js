__d(
  "CometProfessionalDashboardABTestingComposerStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = s._(/*BTDS*/ "Create A\/B test"),
      c = s._(/*BTDS*/ "A\/B tests"),
      d = s._(/*BTDS*/ "View results"),
      m = s._(/*BTDS*/ "All"),
      p = s._(/*BTDS*/ "Media"),
      _ = s._(/*BTDS*/ "Thumbnail"),
      f = s._(/*BTDS*/ "Add video"),
      g = s._(/*BTDS*/ "Add image"),
      h = s._(/*BTDS*/ "Default"),
      y = s._(/*BTDS*/ "Add a new version"),
      C = s._(/*BTDS*/ "You can only add up to 4 versions."),
      b = s._(/*BTDS*/ "Upload image"),
      v = s._(/*BTDS*/ "Copy post"),
      S = s._(/*BTDS*/ "Delete post"),
      R = s._(/*BTDS*/ "Delete media"),
      L = s._(/*BTDS*/ "Test variables"),
      E = s._(
        /*BTDS*/ "Variables are the parts of your test versions that differ. This can be media, thumbnails, video titles, descriptions, and hashtags. Using a single variable is recommended.",
      ),
      k = s._(/*BTDS*/ "Loading video"),
      I = s._(/*BTDS*/ "Loading image"),
      T = s._(/*BTDS*/ "Emoji"),
      D = s._(/*BTDS*/ "A\/B test settings"),
      x = s._(/*BTDS*/ "Details"),
      $ = s._(/*BTDS*/ "Test name"),
      P = s._(/*BTDS*/ "Test description (optional)"),
      N = s._(/*BTDS*/ "Publishing options"),
      M = s._(/*BTDS*/ "Choose your test start time"),
      w = s._(/*BTDS*/ "Key metric"),
      A = s._(/*BTDS*/ "Test duration"),
      F = s._(/*BTDS*/ "Preview and publish"),
      O = s._(/*BTDS*/ "Test description"),
      B = s._(/*BTDS*/ "What happens next?"),
      W = s._(/*BTDS*/ "Determine a winner"),
      q = s._(/*BTDS*/ "Used to determine your test's top performing post."),
      U = s._(
        /*BTDS*/ "After your test ends, the top performing post will be shown to your entire audience. You can end your test before your time limit is reached.",
      ),
      V = s._(/*BTDS*/ "Tiebreaker"),
      H = s._(
        /*BTDS*/ "This version will be shown to your entire audience in the event of a tie.",
      ),
      G = s._(/*BTDS*/ "Preview & Publish"),
      z = s._(
        /*BTDS*/ "You can understand your A\/B test results more if you set up a single variable in each version of your post.",
      ),
      j = s._(
        /*BTDS*/ "After your test is finished, you can change the post that is shown to your audience.",
      ),
      K = s._(
        /*BTDS*/ "Once your test is finished, you can cross-post the winning version.",
      ),
      Q = s._(
        /*BTDS*/ "Your versions cannot be the same. Be sure to make at least one variable different in each version.",
      ),
      X = s._(
        /*BTDS*/ "Post tests require at least 2 posts to compare against each other.",
      ),
      Y = s._(/*BTDS*/ "Please fill out all required fields to continue."),
      J = s._(/*BTDS*/ "Give your test a name before publishing."),
      Z = s._(
        /*BTDS*/ "Your test name can\u2019t be longer than 255 characters.",
      ),
      ee = s._(
        /*BTDS*/ "Your A\/B test has been created. You can end your test early in A\/B tests tab.",
      ),
      te = s._(/*BTDS*/ "Processing thumbnail..."),
      ne = s._(/*BTDS*/ "Publish the Best Version of Your Work"),
      re = s._(
        /*BTDS*/ "Test out different versions of your video post with A\/B Testing. Then, publish the video that performs the best on views or whatever metric matters to you. Frequent testing can help you learn what your audience is looking for.",
      ),
      oe =
        ((e = {}),
        (e.THUMBNAIL = s._(/*BTDS*/ "Thumbnail")),
        (e.VIDEO = s._(/*BTDS*/ "Video")),
        (e.TITLE = s._(/*BTDS*/ "Title")),
        (e.DESCRIPTION = s._(/*BTDS*/ "Description")),
        e);
    function ae(e) {
      switch (e) {
        case "AVG_TIME_WATCHED":
          return s._(/*BTDS*/ "Average time watched");
        case "COMMENTS":
          return s._(/*BTDS*/ "Comments");
        case "IMPRESSIONS":
          return s._(/*BTDS*/ "Impressions");
        case "IMPRESSIONS_UNIQUE":
          return s._(/*BTDS*/ "Reach");
        case "LINK_CLICKS":
          return s._(/*BTDS*/ "Link Clicks");
        case "OTHER":
          return s._(/*BTDS*/ "Other");
        case "REACTIONS":
          return s._(/*BTDS*/ "Reactions");
        case "SHARES":
          return s._(/*BTDS*/ "Shares");
        case "VIDEO_VIEWS_60S":
          return s._(/*BTDS*/ "1-minute video views");
        case "VIEWERS":
          return s._(/*BTDS*/ "Viewers");
        case "VIEWS":
          return s._(/*BTDS*/ "Views");
        default:
          return s._(/*BTDS*/ "Unknown");
      }
    }
    function ie(e) {
      return e === "AVG_TIME_WATCHED"
        ? s._(/*BTDS*/ "average time watched")
        : e === "COMMENTS"
          ? s._(/*BTDS*/ "comments")
          : e === "IMPRESSIONS"
            ? s._(/*BTDS*/ "impressions")
            : e === "IMPRESSIONS_UNIQUE"
              ? s._(/*BTDS*/ "reach")
              : e === "LINK_CLICKS"
                ? s._(/*BTDS*/ "link clicks")
                : e === "REACTIONS"
                  ? s._(/*BTDS*/ "reactions")
                  : e === "REELS_PLAYS"
                    ? s._(/*BTDS*/ "plays")
                    : e === "SHARES"
                      ? s._(/*BTDS*/ "shares")
                      : e === "VIDEO_VIEWS_60S"
                        ? s._(/*BTDS*/ "1-minute video views")
                        : e === "VIEWERS"
                          ? s._(/*BTDS*/ "viewers")
                          : e === "VIEWS"
                            ? s._(/*BTDS*/ "views")
                            : s._(/*BTDS*/ "views");
    }
    function le(e) {
      switch (e) {
        case "LIVE":
          return s._(/*BTDS*/ "Live");
        case "PROCESSING":
          return s._(/*BTDS*/ "Processing");
        case "RESOLVED":
          return s._(/*BTDS*/ "Complete");
        case "CANCELLED":
          return s._(/*BTDS*/ "Canceled");
        case "SCHEDULED":
          return s._(/*BTDS*/ "Scheduled");
        case "INVALID":
          return s._(/*BTDS*/ "Invalid");
        case "ERROR":
          return s._(/*BTDS*/ "Error");
        case "DRAFT":
          return s._(/*BTDS*/ "Draft");
        default:
          return s._(/*BTDS*/ "Unknown");
      }
    }
    function se(e) {
      return e === "AUDIO"
        ? s._(/*BTDS*/ "Audio")
        : e === "VIDEO"
          ? s._(/*BTDS*/ "Media")
          : e === "REELS_CAPTION" || e === "TITLE"
            ? s._(/*BTDS*/ "Caption")
            : e === "THUMBNAIL"
              ? s._(/*BTDS*/ "Cover")
              : e === "IMAGE"
                ? s._(/*BTDS*/ "Image")
                : e === "DESCRIPTION" || e === "TEXT" || e === "POST_TEXT"
                  ? s._(/*BTDS*/ "Text")
                  : e === "INSTREAM_ADS_INSERTED" ||
                      e === "AUTO_ADBREAK_INSERTED" ||
                      e === "MANUAL_ADBREAK_INSERTED" ||
                      e === "CAPTION" ||
                      e === "CAPTIONS_ENABLED" ||
                      e === "TAGS"
                    ? s._(/*BTDS*/ "Details")
                    : e === "CONTENT_TYPE"
                      ? s._(/*BTDS*/ "Content type")
                      : e === "URL" || e === "URL_IN_VIDEO_METADATA"
                        ? s._(/*BTDS*/ "URL")
                        : e === "SMART_CROP"
                          ? s._(/*BTDS*/ "Smart crop")
                          : e === "SMART_TRAILER"
                            ? s._(/*BTDS*/ "Smart preview")
                            : e === "VIDEO_COLLAB"
                              ? s._(/*BTDS*/ "Collaboration")
                              : e === "CONTENT_TAGS"
                                ? s._(/*BTDS*/ "Content tags")
                                : e === "LOCATION_TAG"
                                  ? s._(/*BTDS*/ "Location")
                                  : e === "EMBEDDABLE"
                                    ? s._(/*BTDS*/ "Embeddable")
                                    : e === "CUSTOM_LABELS"
                                      ? s._(/*BTDS*/ "Custom labels")
                                      : e === "ADD_AUTO_HASHTAGS"
                                        ? s._(/*BTDS*/ "Add hashtags")
                                        : e === "AA_TEST"
                                          ? s._(/*BTDS*/ "Ranking test")
                                          : e === "DUBBING"
                                            ? s._(/*BTDS*/ "Dubbing")
                                            : s._(/*BTDS*/ "--");
    }
    ((l.CREATE_AB_TEST_LABEL = u),
      (l.AB_TEST_LABEL = c),
      (l.VIEW_RESULTS_BUTTON_LABEL = d),
      (l.ALL_AB_TESTS_FILTER_LABEL = m),
      (l.MEDIA_SECTION_HEADER = p),
      (l.THUMBNAIL_SECTION_HEADER = _),
      (l.ADD_VIDEO_BUTTON = f),
      (l.ADD_IMAGE_BUTTON = g),
      (l.DEFAULT_POST_LABEL = h),
      (l.ADD_NEW_VERSION_BUTTON = y),
      (l.DISABLE_ADD_NEW_VERSION_TOOLTIP = C),
      (l.UPLOAD_IMAGE_BUTTON = b),
      (l.DUPLICATE_POST_BUTTON_TOOLTIP = v),
      (l.DELETE_POST_BUTTON_TOOLTIP = S),
      (l.DELETE_MEDIA_BUTTON_TOOLTIP = R),
      (l.TEST_VARIABLES_LABEL = L),
      (l.TEST_VARIABLES_TOOLTIP = E),
      (l.LOADING_VIDEO_LABEL = k),
      (l.LOADING_IMAGE_LABEL = I),
      (l.EMOJI_SPROUT_LABEL = T),
      (l.AB_TEST_SETTINGS_HEADER = D),
      (l.DETAILS_CARD_HEADER = x),
      (l.TEST_NAME_LABEL = $),
      (l.TEST_DESCRIPTION_OPTIONAL_LABEL = P),
      (l.PUBLISHING_OPTIONS_CARD_HEADER = N),
      (l.SCHEDULING_OPTIONS_LABEL = M),
      (l.KEY_METRIC_LABEL = w),
      (l.TEST_DURATION_LABEL = A),
      (l.PREVIEW_AND_PUBLISH_HEADER = F),
      (l.TEST_DESCRIPTION_LABEL = O),
      (l.PUBLISH_INFO_CARD_HEADER = B),
      (l.DETERMINE_WINNER_CARD_HEADER = W),
      (l.KEY_METRIC_DESCRIPTION = q),
      (l.TEST_DURATION_DESCRIPTION = U),
      (l.TIEBREAKER_LABEL = V),
      (l.TIEBREAKER_DESCRIPTION = H),
      (l.PREVIEW_AND_PUBLISH_BUTTON = G),
      (l.CREATION_FOOTER_TIP_TEXT = z),
      (l.EXPERIMENT_SETTINGS_FOOTER_TIP_TEXT = j),
      (l.REVIEW_AND_PUBLISH_FOOTER_TIP_TEXT = K),
      (l.DUPLICATE_POST_WARNING_TOOLTIP = Q),
      (l.NOT_ENOUGH_POSTS_WARNING_TOOLTIP = X),
      (l.MISSING_REQUIRED_FIELDS_WARNING_TOOLTIP = Y),
      (l.TEST_NAME_EMPTY_WARNING_TOOLTIP = J),
      (l.TEST_NAME_TOO_LONG_WARNING_TOOLTIP = Z),
      (l.EXPERIMENT_CREATION_FINISHED_TOAST_TEXT = ee),
      (l.PROCESSING_THUMBNAIL_TEXT = te),
      (l.EMPTY_PAGE_HEADER = ne),
      (l.EMPTY_PAGE_SUBHEADER = re),
      (l.VARIANT_LABELS = oe),
      (l.getOptimizationGoalString = ae),
      (l.getOptimizationGoalNoun = ie),
      (l.getPublishStatus = le),
      (l.getPostVariantLabel = se));
  },
  226,
);
