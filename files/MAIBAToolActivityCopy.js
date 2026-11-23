__d(
  "MAIBAToolActivityCopy",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = new Map(),
      m = u.createContext(d);
    function p(e) {
      var t = e.children,
        n = e.headerIndexes;
      return u.jsx(m.Provider, { value: n, children: t });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t, n) {
      if (e < 2) return 0;
      for (var r = 0, o = 0; o < n.length; o++)
        r = (r * 31 + n.charCodeAt(o)) % 2147483647;
      var a = t != null && t >= 0 && t < e ? t : null,
        i = a != null ? e - 1 : e,
        l = r % i;
      return (a != null && l >= a && l++, l);
    }
    function f(e) {
      var t = new Map(),
        n = new Map();
      for (var r of e) {
        var o, a, i, l, s;
        if (!t.has(r.tool_call_id)) {
          var u = r.tool_name,
            c = h(u);
          if (!(c == null || u == null)) {
            var d = (o = c.headerRotationKey) != null ? o : u,
              m = Math.max(
                1 +
                  ((a = (i = c.alternateHeaders) == null ? void 0 : i.length) !=
                  null
                    ? a
                    : 0),
                1 +
                  ((l =
                    (s = c.alternateCompletedHeaders) == null
                      ? void 0
                      : s.length) != null
                    ? l
                    : 0),
              ),
              p = _(m, n.get(d), r.tool_call_id);
            (t.set(r.tool_call_id, p), n.set(d, p));
          }
        }
      }
      return t;
    }
    function g(e, t, n) {
      var r, o;
      n === void 0 && (n = "running");
      var a = c(m);
      if (e == null) return null;
      if (n === "completed") {
        var i,
          l,
          u = [(i = e.completedName) != null ? i : s._(/*BTDS*/ "")].concat(
            (l = e.alternateCompletedHeaders) != null ? l : [],
          ),
          d = t == null ? 0 : a.get(t);
        return u[(d != null ? d : 0) % u.length];
      }
      if (n === "failed") {
        var p;
        return (p = e.failedName) != null ? p : s._(/*BTDS*/ "");
      }
      var _ = [e.name].concat((r = e.alternateHeaders) != null ? r : []),
        f = t == null ? 0 : a.get(t);
      return (o = _[f != null ? f : 0]) != null ? o : e.name;
    }
    function h(e) {
      return e === "get_ad_performance_metrics" || e === "metrics_matrix"
        ? {
            alternateCompletedHeaders: [s._(/*BTDS*/ ""), s._(/*BTDS*/ "")],
            alternateHeaders: [s._(/*BTDS*/ ""), s._(/*BTDS*/ "")],
            completedName: s._(/*BTDS*/ ""),
            description: s._(/*BTDS*/ ""),
            headerRotationKey: "ad-performance",
            name: s._(/*BTDS*/ ""),
          }
        : e === "ad_account_explorer" ||
            e === "lwi_ad_explorer" ||
            e === "list_ad_entities"
          ? {
              completedName: s._(/*BTDS*/ ""),
              description: s._(/*BTDS*/ ""),
              name: s._(/*BTDS*/ ""),
            }
          : e === "performance_trend" || e === "ig_performance_historical"
            ? {
                completedName: s._(/*BTDS*/ ""),
                description: s._(/*BTDS*/ ""),
                name: s._(/*BTDS*/ ""),
              }
            : e === "top_bottom"
              ? {
                  completedName: s._(/*BTDS*/ ""),
                  description: s._(/*BTDS*/ ""),
                  name: s._(/*BTDS*/ ""),
                }
              : e === "anomaly_signal"
                ? {
                    completedName: s._(/*BTDS*/ ""),
                    description: s._(/*BTDS*/ ""),
                    name: s._(/*BTDS*/ ""),
                  }
                : e === "creative_attribute_v2"
                  ? {
                      completedName: s._(/*BTDS*/ ""),
                      description: s._(/*BTDS*/ ""),
                      name: s._(/*BTDS*/ ""),
                    }
                  : e === "creative_diversity"
                    ? {
                        completedName: s._(/*BTDS*/ ""),
                        description: s._(/*BTDS*/ ""),
                        name: s._(/*BTDS*/ ""),
                      }
                    : e === "industry_benchmark" ||
                        e === "internal_benchmark" ||
                        e === "auction_ranking_benchmarks" ||
                        e === "top_peer_personas"
                      ? {
                          completedName: s._(/*BTDS*/ ""),
                          description: s._(/*BTDS*/ ""),
                          name: s._(/*BTDS*/ ""),
                        }
                      : e === "audience_setting" ||
                          e === "past_ad_targeting_and_budget"
                        ? {
                            description: s._(/*BTDS*/ ""),
                            name: s._(/*BTDS*/ ""),
                          }
                        : e === "audience_restriction"
                          ? {
                              description: s._(/*BTDS*/ ""),
                              name: s._(/*BTDS*/ ""),
                            }
                          : e === "targeting_search"
                            ? {
                                description: s._(/*BTDS*/ ""),
                                name: s._(/*BTDS*/ ""),
                              }
                            : e === "budget_liquidity_analysis" ||
                                e === "budget_allocation_simulation"
                              ? {
                                  description: s._(/*BTDS*/ ""),
                                  name: s._(/*BTDS*/ ""),
                                }
                              : e === "budget_scaling_analysis" ||
                                  e === "ig_sgc_budget_duration_recommendation"
                                ? {
                                    description: s._(/*BTDS*/ ""),
                                    name: s._(/*BTDS*/ ""),
                                  }
                                : e === "compute_budget_and_cpa"
                                  ? {
                                      description: s._(/*BTDS*/ ""),
                                      name: s._(/*BTDS*/ ""),
                                    }
                                  : e === "identify_spend_guardrails"
                                    ? {
                                        description: s._(/*BTDS*/ ""),
                                        name: s._(/*BTDS*/ ""),
                                      }
                                    : e === "learning_phase" ||
                                        e === "learning_limited"
                                      ? {
                                          description: s._(/*BTDS*/ ""),
                                          name: s._(/*BTDS*/ ""),
                                        }
                                      : e === "get_errors"
                                        ? {
                                            description: s._(/*BTDS*/ ""),
                                            name: s._(/*BTDS*/ ""),
                                          }
                                        : e === "ad_status"
                                          ? {
                                              description: s._(/*BTDS*/ ""),
                                              name: s._(/*BTDS*/ ""),
                                            }
                                          : e === "get_opportunity_score"
                                            ? {
                                                description: s._(/*BTDS*/ ""),
                                                name: s._(/*BTDS*/ ""),
                                              }
                                            : e === "get_campaign_score"
                                              ? {
                                                  description: s._(/*BTDS*/ ""),
                                                  name: s._(/*BTDS*/ ""),
                                                }
                                              : e ===
                                                    "get_performance_recommendations" ||
                                                  e ===
                                                    "get_advertiser_recommendations_tool"
                                                ? {
                                                    completedName: s._(
                                                      /*BTDS*/ "",
                                                    ),
                                                    description: s._(
                                                      /*BTDS*/ "",
                                                    ),
                                                    name: s._(/*BTDS*/ ""),
                                                  }
                                                : e ===
                                                      "fetch_ad_object_spec" ||
                                                    e ===
                                                      "get_ad_spec_being_edited"
                                                  ? {
                                                      description: s._(
                                                        /*BTDS*/ "",
                                                      ),
                                                      name: s._(/*BTDS*/ ""),
                                                    }
                                                  : e === "get_field_context" ||
                                                      e ===
                                                        "fragment_spec_mutation_metadata"
                                                    ? {
                                                        description: s._(
                                                          /*BTDS*/ "",
                                                        ),
                                                        name: s._(/*BTDS*/ ""),
                                                      }
                                                    : e ===
                                                          "prepare_ad_creation_candidate" ||
                                                        e ===
                                                          "prepare_campaign_creation_proposal"
                                                      ? {
                                                          description: s._(
                                                            /*BTDS*/ "",
                                                          ),
                                                          name: s._(
                                                            /*BTDS*/ "",
                                                          ),
                                                        }
                                                      : e ===
                                                          "propose_ad_strategy"
                                                        ? {
                                                            description: s._(
                                                              /*BTDS*/ "",
                                                            ),
                                                            name: s._(
                                                              /*BTDS*/ "",
                                                            ),
                                                          }
                                                        : e ===
                                                            "execute_confirmed_ad_creation"
                                                          ? {
                                                              description: s._(
                                                                /*BTDS*/ "",
                                                              ),
                                                              name: s._(
                                                                /*BTDS*/ "",
                                                              ),
                                                            }
                                                          : e ===
                                                                "edit_ad_object" ||
                                                              e ===
                                                                "edit_ad_object_drafts" ||
                                                              e ===
                                                                "leadgen_campaign_draft_edit"
                                                            ? {
                                                                description:
                                                                  s._(
                                                                    /*BTDS*/ "",
                                                                  ),
                                                                name: s._(
                                                                  /*BTDS*/ "",
                                                                ),
                                                              }
                                                            : e ===
                                                                "duplicate_ad_object"
                                                              ? {
                                                                  description:
                                                                    s._(
                                                                      /*BTDS*/ "",
                                                                    ),
                                                                  name: s._(
                                                                    /*BTDS*/ "",
                                                                  ),
                                                                }
                                                              : e ===
                                                                    "create_ad_study" ||
                                                                  e ===
                                                                    "edit_ad_object_study" ||
                                                                  e ===
                                                                    "link_ad_object_to_study"
                                                                ? {
                                                                    description:
                                                                      s._(
                                                                        /*BTDS*/ "",
                                                                      ),
                                                                    name: s._(
                                                                      /*BTDS*/ "",
                                                                    ),
                                                                  }
                                                                : e ===
                                                                    "preflight_ad_object_edit"
                                                                  ? {
                                                                      description:
                                                                        s._(
                                                                          /*BTDS*/ "",
                                                                        ),
                                                                      name: s._(
                                                                        /*BTDS*/ "",
                                                                      ),
                                                                    }
                                                                  : e ===
                                                                      "preview_publish"
                                                                    ? {
                                                                        description:
                                                                          s._(
                                                                            /*BTDS*/ "",
                                                                          ),
                                                                        name: s._(
                                                                          /*BTDS*/ "",
                                                                        ),
                                                                      }
                                                                    : e ===
                                                                          "ads_policy_tool" ||
                                                                        e ===
                                                                          "run_ads_checker"
                                                                      ? {
                                                                          description:
                                                                            s._(
                                                                              /*BTDS*/ "",
                                                                            ),
                                                                          name: s._(
                                                                            /*BTDS*/ "",
                                                                          ),
                                                                        }
                                                                      : e ===
                                                                          "generate_ad_text"
                                                                        ? {
                                                                            description:
                                                                              s._(
                                                                                /*BTDS*/ "",
                                                                              ),
                                                                            name: s._(
                                                                              /*BTDS*/ "",
                                                                            ),
                                                                          }
                                                                        : e ===
                                                                            "edit_ad_image"
                                                                          ? {
                                                                              description:
                                                                                s._(
                                                                                  /*BTDS*/ "",
                                                                                ),
                                                                              name: s._(
                                                                                /*BTDS*/ "",
                                                                              ),
                                                                            }
                                                                          : e ===
                                                                              "generate_ad_image"
                                                                            ? {
                                                                                description:
                                                                                  s._(
                                                                                    /*BTDS*/ "",
                                                                                  ),
                                                                                name: s._(
                                                                                  /*BTDS*/ "",
                                                                                ),
                                                                              }
                                                                            : e ===
                                                                                "ad_library_search"
                                                                              ? {
                                                                                  description:
                                                                                    s._(
                                                                                      /*BTDS*/ "",
                                                                                    ),
                                                                                  name: s._(
                                                                                    /*BTDS*/ "",
                                                                                  ),
                                                                                }
                                                                              : e ===
                                                                                  "list_ad_videos"
                                                                                ? {
                                                                                    description:
                                                                                      s._(
                                                                                        /*BTDS*/ "",
                                                                                      ),
                                                                                    name: s._(
                                                                                      /*BTDS*/ "",
                                                                                    ),
                                                                                  }
                                                                                : e ===
                                                                                    "list_ad_destination_candidates"
                                                                                  ? {
                                                                                      description:
                                                                                        s._(
                                                                                          /*BTDS*/ "",
                                                                                        ),
                                                                                      name: s._(
                                                                                        /*BTDS*/ "",
                                                                                      ),
                                                                                    }
                                                                                  : e ===
                                                                                        "list_ad_optimization_goal_candidates" ||
                                                                                      e ===
                                                                                        "ig_objective_metadata" ||
                                                                                      e ===
                                                                                        "ig_objective_recommendation" ||
                                                                                      e ===
                                                                                        "ig_objective_eligibility"
                                                                                    ? {
                                                                                        description:
                                                                                          s._(
                                                                                            /*BTDS*/ "",
                                                                                          ),
                                                                                        name: s._(
                                                                                          /*BTDS*/ "",
                                                                                        ),
                                                                                      }
                                                                                    : e ===
                                                                                          "placement_constraints" ||
                                                                                        e ===
                                                                                          "ig_ad_placement"
                                                                                      ? {
                                                                                          description:
                                                                                            s._(
                                                                                              /*BTDS*/ "",
                                                                                            ),
                                                                                          name: s._(
                                                                                            /*BTDS*/ "",
                                                                                          ),
                                                                                        }
                                                                                      : e ===
                                                                                            "ig_budget_metadata" ||
                                                                                          e ===
                                                                                            "ig_recommended_budgets"
                                                                                        ? {
                                                                                            description:
                                                                                              s._(
                                                                                                /*BTDS*/ "",
                                                                                              ),
                                                                                            name: s._(
                                                                                              /*BTDS*/ "",
                                                                                            ),
                                                                                          }
                                                                                        : e ===
                                                                                            "ig_draft"
                                                                                          ? {
                                                                                              description:
                                                                                                s._(
                                                                                                  /*BTDS*/ "",
                                                                                                ),
                                                                                              name: s._(
                                                                                                /*BTDS*/ "",
                                                                                              ),
                                                                                            }
                                                                                          : e ===
                                                                                              "ig_media_eligibility"
                                                                                            ? {
                                                                                                description:
                                                                                                  s._(
                                                                                                    /*BTDS*/ "",
                                                                                                  ),
                                                                                                name: s._(
                                                                                                  /*BTDS*/ "",
                                                                                                ),
                                                                                              }
                                                                                            : e ===
                                                                                                "create_rf_plan"
                                                                                              ? {
                                                                                                  description:
                                                                                                    s._(
                                                                                                      /*BTDS*/ "",
                                                                                                    ),
                                                                                                  name: s._(
                                                                                                    /*BTDS*/ "",
                                                                                                  ),
                                                                                                }
                                                                                              : e ===
                                                                                                  "edit_rf_plan"
                                                                                                ? {
                                                                                                    description:
                                                                                                      s._(
                                                                                                        /*BTDS*/ "",
                                                                                                      ),
                                                                                                    name: s._(
                                                                                                      /*BTDS*/ "",
                                                                                                    ),
                                                                                                  }
                                                                                                : e ===
                                                                                                    "delete_rf_plan"
                                                                                                  ? {
                                                                                                      description:
                                                                                                        s._(
                                                                                                          /*BTDS*/ "",
                                                                                                        ),
                                                                                                      name: s._(
                                                                                                        /*BTDS*/ "",
                                                                                                      ),
                                                                                                    }
                                                                                                  : e ===
                                                                                                        "get_user_assets" ||
                                                                                                      e ===
                                                                                                        "permitted_assets_for_action" ||
                                                                                                      e ===
                                                                                                        "user_permission_on_asset" ||
                                                                                                      e ===
                                                                                                        "check_mbs_current_asset_access"
                                                                                                    ? {
                                                                                                        description:
                                                                                                          s._(
                                                                                                            /*BTDS*/ "",
                                                                                                          ),
                                                                                                        name: s._(
                                                                                                          /*BTDS*/ "",
                                                                                                        ),
                                                                                                      }
                                                                                                    : e ===
                                                                                                          "get_user_catalogs" ||
                                                                                                        e ===
                                                                                                          "get_catalog_info"
                                                                                                      ? {
                                                                                                          description:
                                                                                                            s._(
                                                                                                              /*BTDS*/ "",
                                                                                                            ),
                                                                                                          name: s._(
                                                                                                            /*BTDS*/ "",
                                                                                                          ),
                                                                                                        }
                                                                                                      : e ===
                                                                                                            "get_catalog_products" ||
                                                                                                          e ===
                                                                                                            "get_product_details"
                                                                                                        ? {
                                                                                                            description:
                                                                                                              s._(
                                                                                                                /*BTDS*/ "",
                                                                                                              ),
                                                                                                            name: s._(
                                                                                                              /*BTDS*/ "",
                                                                                                            ),
                                                                                                          }
                                                                                                        : e ===
                                                                                                            "get_catalog_event_health"
                                                                                                          ? {
                                                                                                              description:
                                                                                                                s._(
                                                                                                                  /*BTDS*/ "",
                                                                                                                ),
                                                                                                              name: s._(
                                                                                                                /*BTDS*/ "",
                                                                                                              ),
                                                                                                            }
                                                                                                          : e ===
                                                                                                                "list_lead_gen_forms" ||
                                                                                                              e ===
                                                                                                                "create_lead_gen_form" ||
                                                                                                              e ===
                                                                                                                "check_lead_gen_tos"
                                                                                                            ? {
                                                                                                                description:
                                                                                                                  s._(
                                                                                                                    /*BTDS*/ "",
                                                                                                                  ),
                                                                                                                name: s._(
                                                                                                                  /*BTDS*/ "",
                                                                                                                ),
                                                                                                              }
                                                                                                            : e ===
                                                                                                                  "get_business_context" ||
                                                                                                                e ===
                                                                                                                  "advertiser_context" ||
                                                                                                                e ===
                                                                                                                  "get_advertiser_business_profile" ||
                                                                                                                e ===
                                                                                                                  "infer_business_setup_selection" ||
                                                                                                                e ===
                                                                                                                  "list_ad_account_currencies" ||
                                                                                                                e ===
                                                                                                                  "list_ad_account_timezones" ||
                                                                                                                e ===
                                                                                                                  "resolve_business_name"
                                                                                                              ? {
                                                                                                                  description:
                                                                                                                    s._(
                                                                                                                      /*BTDS*/ "",
                                                                                                                    ),
                                                                                                                  name: s._(
                                                                                                                    /*BTDS*/ "",
                                                                                                                  ),
                                                                                                                }
                                                                                                              : e ===
                                                                                                                  "get_ig_profile_info"
                                                                                                                ? {
                                                                                                                    description:
                                                                                                                      s._(
                                                                                                                        /*BTDS*/ "",
                                                                                                                      ),
                                                                                                                    name: s._(
                                                                                                                      /*BTDS*/ "",
                                                                                                                    ),
                                                                                                                  }
                                                                                                                : e ===
                                                                                                                      "get_page_info" ||
                                                                                                                    e ===
                                                                                                                      "get_mbs_page_profile" ||
                                                                                                                    e ===
                                                                                                                      "get_mbs_entity_info"
                                                                                                                  ? {
                                                                                                                      description:
                                                                                                                        s._(
                                                                                                                          /*BTDS*/ "",
                                                                                                                        ),
                                                                                                                      name: s._(
                                                                                                                        /*BTDS*/ "",
                                                                                                                      ),
                                                                                                                    }
                                                                                                                  : e ===
                                                                                                                      "get_entity_info"
                                                                                                                    ? {
                                                                                                                        description:
                                                                                                                          s._(
                                                                                                                            /*BTDS*/ "",
                                                                                                                          ),
                                                                                                                        name: s._(
                                                                                                                          /*BTDS*/ "",
                                                                                                                        ),
                                                                                                                      }
                                                                                                                    : e ===
                                                                                                                        "lwi_post_explorer"
                                                                                                                      ? {
                                                                                                                          description:
                                                                                                                            s._(
                                                                                                                              /*BTDS*/ "",
                                                                                                                            ),
                                                                                                                          name: s._(
                                                                                                                            /*BTDS*/ "",
                                                                                                                          ),
                                                                                                                        }
                                                                                                                      : e ===
                                                                                                                          "page_insights"
                                                                                                                        ? {
                                                                                                                            description:
                                                                                                                              s._(
                                                                                                                                /*BTDS*/ "",
                                                                                                                              ),
                                                                                                                            name: s._(
                                                                                                                              /*BTDS*/ "",
                                                                                                                            ),
                                                                                                                          }
                                                                                                                        : e ===
                                                                                                                            "inbox_insights"
                                                                                                                          ? {
                                                                                                                              description:
                                                                                                                                s._(
                                                                                                                                  /*BTDS*/ "",
                                                                                                                                ),
                                                                                                                              name: s._(
                                                                                                                                /*BTDS*/ "",
                                                                                                                              ),
                                                                                                                            }
                                                                                                                          : e ===
                                                                                                                              "review_management"
                                                                                                                            ? {
                                                                                                                                description:
                                                                                                                                  s._(
                                                                                                                                    /*BTDS*/ "",
                                                                                                                                  ),
                                                                                                                                name: s._(
                                                                                                                                  /*BTDS*/ "",
                                                                                                                                ),
                                                                                                                              }
                                                                                                                            : e ===
                                                                                                                                "get_mbs_contact_card"
                                                                                                                              ? {
                                                                                                                                  description:
                                                                                                                                    s._(
                                                                                                                                      /*BTDS*/ "",
                                                                                                                                    ),
                                                                                                                                  name: s._(
                                                                                                                                    /*BTDS*/ "",
                                                                                                                                  ),
                                                                                                                                }
                                                                                                                              : e ===
                                                                                                                                  "help_article_tool"
                                                                                                                                ? {
                                                                                                                                    description:
                                                                                                                                      s._(
                                                                                                                                        /*BTDS*/ "",
                                                                                                                                      ),
                                                                                                                                    name: s._(
                                                                                                                                      /*BTDS*/ "",
                                                                                                                                    ),
                                                                                                                                  }
                                                                                                                                : e ===
                                                                                                                                    "markdown_to_pdf"
                                                                                                                                  ? {
                                                                                                                                      description:
                                                                                                                                        s._(
                                                                                                                                          /*BTDS*/ "",
                                                                                                                                        ),
                                                                                                                                      name: s._(
                                                                                                                                        /*BTDS*/ "",
                                                                                                                                      ),
                                                                                                                                    }
                                                                                                                                  : e ===
                                                                                                                                      "get_download_link"
                                                                                                                                    ? {
                                                                                                                                        description:
                                                                                                                                          s._(
                                                                                                                                            /*BTDS*/ "",
                                                                                                                                          ),
                                                                                                                                        name: s._(
                                                                                                                                          /*BTDS*/ "",
                                                                                                                                        ),
                                                                                                                                      }
                                                                                                                                    : e ===
                                                                                                                                        "read"
                                                                                                                                      ? {
                                                                                                                                          description:
                                                                                                                                            s._(
                                                                                                                                              /*BTDS*/ "",
                                                                                                                                            ),
                                                                                                                                          name: s._(
                                                                                                                                            /*BTDS*/ "",
                                                                                                                                          ),
                                                                                                                                        }
                                                                                                                                      : e ===
                                                                                                                                          "write"
                                                                                                                                        ? {
                                                                                                                                            description:
                                                                                                                                              s._(
                                                                                                                                                /*BTDS*/ "",
                                                                                                                                              ),
                                                                                                                                            name: s._(
                                                                                                                                              /*BTDS*/ "",
                                                                                                                                            ),
                                                                                                                                          }
                                                                                                                                        : e ===
                                                                                                                                            "bash"
                                                                                                                                          ? {
                                                                                                                                              description:
                                                                                                                                                s._(
                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                ),
                                                                                                                                              name: s._(
                                                                                                                                                /*BTDS*/ "",
                                                                                                                                              ),
                                                                                                                                            }
                                                                                                                                          : e ===
                                                                                                                                              "playwright_cli"
                                                                                                                                            ? {
                                                                                                                                                description:
                                                                                                                                                  s._(
                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                  ),
                                                                                                                                                name: s._(
                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                ),
                                                                                                                                              }
                                                                                                                                            : e ===
                                                                                                                                                  "load_skill" ||
                                                                                                                                                e ===
                                                                                                                                                  "load_skills" ||
                                                                                                                                                e ===
                                                                                                                                                  "load_skill_resource" ||
                                                                                                                                                e ===
                                                                                                                                                  "cfgr_load_skill" ||
                                                                                                                                                e ===
                                                                                                                                                  "cfgr_load_skills" ||
                                                                                                                                                e ===
                                                                                                                                                  "maiba_load_skills" ||
                                                                                                                                                e ===
                                                                                                                                                  "app_state_patch" ||
                                                                                                                                                e ===
                                                                                                                                                  "app_state_read"
                                                                                                                                              ? {
                                                                                                                                                  completedName:
                                                                                                                                                    s._(
                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                    ),
                                                                                                                                                  description:
                                                                                                                                                    s._(
                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                    ),
                                                                                                                                                  name: s._(
                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                  ),
                                                                                                                                                }
                                                                                                                                              : e ===
                                                                                                                                                  "maiba_list_skills"
                                                                                                                                                ? {
                                                                                                                                                    description:
                                                                                                                                                      s._(
                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                      ),
                                                                                                                                                    name: s._(
                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                    ),
                                                                                                                                                  }
                                                                                                                                                : e ===
                                                                                                                                                      "create_plan" ||
                                                                                                                                                    e ===
                                                                                                                                                      "commit_plan" ||
                                                                                                                                                    e ===
                                                                                                                                                      "advance_plan" ||
                                                                                                                                                    e ===
                                                                                                                                                      "subagent_tool_planner" ||
                                                                                                                                                    e ===
                                                                                                                                                      "transfer_to_subagent_planning"
                                                                                                                                                  ? {
                                                                                                                                                      description:
                                                                                                                                                        s._(
                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                        ),
                                                                                                                                                      name: s._(
                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                      ),
                                                                                                                                                    }
                                                                                                                                                  : e ===
                                                                                                                                                      "read_team_plan"
                                                                                                                                                    ? {
                                                                                                                                                        description:
                                                                                                                                                          s._(
                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                          ),
                                                                                                                                                        name: s._(
                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                        ),
                                                                                                                                                      }
                                                                                                                                                    : e ===
                                                                                                                                                          "create_scheduled_task" ||
                                                                                                                                                        e ===
                                                                                                                                                          "create_scheduled_reminder" ||
                                                                                                                                                        e ===
                                                                                                                                                          "create_condition_based_task" ||
                                                                                                                                                        e ===
                                                                                                                                                          "create_async_task"
                                                                                                                                                      ? {
                                                                                                                                                          description:
                                                                                                                                                            s._(
                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                            ),
                                                                                                                                                          name: s._(
                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                          ),
                                                                                                                                                        }
                                                                                                                                                      : e ===
                                                                                                                                                            "list_tasks" ||
                                                                                                                                                          e ===
                                                                                                                                                            "get_task" ||
                                                                                                                                                          e ===
                                                                                                                                                            "update_task" ||
                                                                                                                                                          e ===
                                                                                                                                                            "delete_task"
                                                                                                                                                        ? {
                                                                                                                                                            description:
                                                                                                                                                              s._(
                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                              ),
                                                                                                                                                            name: s._(
                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                            ),
                                                                                                                                                          }
                                                                                                                                                        : e ===
                                                                                                                                                              "transfer_to_subagent_performance_subagent" ||
                                                                                                                                                            e ===
                                                                                                                                                              "transfer_to_subagent_signals_subagent"
                                                                                                                                                          ? {
                                                                                                                                                              description:
                                                                                                                                                                s._(
                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                ),
                                                                                                                                                              name: s._(
                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                              ),
                                                                                                                                                            }
                                                                                                                                                          : e ===
                                                                                                                                                              "transfer_to_subagent_ig_boost_executor_subagent"
                                                                                                                                                            ? {
                                                                                                                                                                description:
                                                                                                                                                                  s._(
                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                  ),
                                                                                                                                                                name: s._(
                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                ),
                                                                                                                                                              }
                                                                                                                                                            : e ===
                                                                                                                                                                "transfer_to_subagent_ad_creation_copilot_subagent"
                                                                                                                                                              ? {
                                                                                                                                                                  description:
                                                                                                                                                                    s._(
                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                    ),
                                                                                                                                                                  name: s._(
                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                  ),
                                                                                                                                                                }
                                                                                                                                                              : e ===
                                                                                                                                                                    "contact_support" ||
                                                                                                                                                                  e ===
                                                                                                                                                                    "support_handoff" ||
                                                                                                                                                                  e ===
                                                                                                                                                                    "support_agent"
                                                                                                                                                                ? {
                                                                                                                                                                    description:
                                                                                                                                                                      s._(
                                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                                      ),
                                                                                                                                                                    name: s._(
                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                    ),
                                                                                                                                                                  }
                                                                                                                                                                : e ===
                                                                                                                                                                    "axon_human_handover"
                                                                                                                                                                  ? {
                                                                                                                                                                      description:
                                                                                                                                                                        s._(
                                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                                        ),
                                                                                                                                                                      name: s._(
                                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                                      ),
                                                                                                                                                                    }
                                                                                                                                                                  : e ===
                                                                                                                                                                        "transfer_to_subagent_main" ||
                                                                                                                                                                      e ===
                                                                                                                                                                        "transfer_to_subagent_support_subagent"
                                                                                                                                                                    ? {
                                                                                                                                                                        description:
                                                                                                                                                                          s._(
                                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                                          ),
                                                                                                                                                                        name: s._(
                                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                                        ),
                                                                                                                                                                      }
                                                                                                                                                                    : e ===
                                                                                                                                                                        "tool_group"
                                                                                                                                                                      ? {
                                                                                                                                                                          description:
                                                                                                                                                                            s._(
                                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                                            ),
                                                                                                                                                                          name: s._(
                                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                                          ),
                                                                                                                                                                        }
                                                                                                                                                                      : e ===
                                                                                                                                                                          "noop"
                                                                                                                                                                        ? {
                                                                                                                                                                            description:
                                                                                                                                                                              s._(
                                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                                              ),
                                                                                                                                                                            name: s._(
                                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                                            ),
                                                                                                                                                                          }
                                                                                                                                                                        : e ===
                                                                                                                                                                            "create_multi_ad_objects"
                                                                                                                                                                          ? {
                                                                                                                                                                              description:
                                                                                                                                                                                s._(
                                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                                ),
                                                                                                                                                                              name: s._(
                                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                                              ),
                                                                                                                                                                            }
                                                                                                                                                                          : e ===
                                                                                                                                                                              "get_advertiser_signals_v2"
                                                                                                                                                                            ? {
                                                                                                                                                                                description:
                                                                                                                                                                                  s._(
                                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                                  ),
                                                                                                                                                                                name: s._(
                                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                                ),
                                                                                                                                                                              }
                                                                                                                                                                            : e ===
                                                                                                                                                                                "resolve_special_ad_category_requirements"
                                                                                                                                                                              ? {
                                                                                                                                                                                  description:
                                                                                                                                                                                    s._(
                                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                                    ),
                                                                                                                                                                                  name: s._(
                                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                                  ),
                                                                                                                                                                                }
                                                                                                                                                                              : e ===
                                                                                                                                                                                  "update_scheduled_task"
                                                                                                                                                                                ? {
                                                                                                                                                                                    description:
                                                                                                                                                                                      s._(
                                                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                                                      ),
                                                                                                                                                                                    name: s._(
                                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                                    ),
                                                                                                                                                                                  }
                                                                                                                                                                                : e ===
                                                                                                                                                                                    "update_condition_based_task"
                                                                                                                                                                                  ? {
                                                                                                                                                                                      description:
                                                                                                                                                                                        s._(
                                                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                                                        ),
                                                                                                                                                                                      name: s._(
                                                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                                                      ),
                                                                                                                                                                                    }
                                                                                                                                                                                  : e ===
                                                                                                                                                                                      "list_maiba_tasks"
                                                                                                                                                                                    ? {
                                                                                                                                                                                        description:
                                                                                                                                                                                          s._(
                                                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                                                          ),
                                                                                                                                                                                        name: s._(
                                                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                                                        ),
                                                                                                                                                                                      }
                                                                                                                                                                                    : e ===
                                                                                                                                                                                        "pause_maiba_task"
                                                                                                                                                                                      ? {
                                                                                                                                                                                          description:
                                                                                                                                                                                            s._(
                                                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                                                            ),
                                                                                                                                                                                          name: s._(
                                                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                                                          ),
                                                                                                                                                                                        }
                                                                                                                                                                                      : e ===
                                                                                                                                                                                          "resume_maiba_task"
                                                                                                                                                                                        ? {
                                                                                                                                                                                            description:
                                                                                                                                                                                              s._(
                                                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                                                              ),
                                                                                                                                                                                            name: s._(
                                                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                                                            ),
                                                                                                                                                                                          }
                                                                                                                                                                                        : e ===
                                                                                                                                                                                            "delete_maiba_task"
                                                                                                                                                                                          ? {
                                                                                                                                                                                              description:
                                                                                                                                                                                                s._(
                                                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                                                ),
                                                                                                                                                                                              name: s._(
                                                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                                                              ),
                                                                                                                                                                                            }
                                                                                                                                                                                          : e ===
                                                                                                                                                                                                "find_business_id" ||
                                                                                                                                                                                              e ===
                                                                                                                                                                                                "find_business_id_data"
                                                                                                                                                                                            ? {
                                                                                                                                                                                                description:
                                                                                                                                                                                                  s._(
                                                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                                                  ),
                                                                                                                                                                                                name: s._(
                                                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                                                ),
                                                                                                                                                                                              }
                                                                                                                                                                                            : e ===
                                                                                                                                                                                                  "get_pixel" ||
                                                                                                                                                                                                e ===
                                                                                                                                                                                                  "get_pixel_data"
                                                                                                                                                                                              ? {
                                                                                                                                                                                                  completedName:
                                                                                                                                                                                                    s._(
                                                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                                                    ),
                                                                                                                                                                                                  description:
                                                                                                                                                                                                    s._(
                                                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                                                    ),
                                                                                                                                                                                                  name: s._(
                                                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                                                  ),
                                                                                                                                                                                                }
                                                                                                                                                                                              : e ===
                                                                                                                                                                                                    "get_capi" ||
                                                                                                                                                                                                  e ===
                                                                                                                                                                                                    "get_capi_data"
                                                                                                                                                                                                ? {
                                                                                                                                                                                                    description:
                                                                                                                                                                                                      s._(
                                                                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                                                                      ),
                                                                                                                                                                                                    name: s._(
                                                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                                                    ),
                                                                                                                                                                                                  }
                                                                                                                                                                                                : e ===
                                                                                                                                                                                                    "ask_signals_specialist"
                                                                                                                                                                                                  ? {
                                                                                                                                                                                                      description:
                                                                                                                                                                                                        s._(
                                                                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                                                                        ),
                                                                                                                                                                                                      name: s._(
                                                                                                                                                                                                        /*BTDS*/ "",
                                                                                                                                                                                                      ),
                                                                                                                                                                                                    }
                                                                                                                                                                                                  : e ===
                                                                                                                                                                                                      "list_claimable_pages"
                                                                                                                                                                                                    ? {
                                                                                                                                                                                                        description:
                                                                                                                                                                                                          s._(
                                                                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                                                                          ),
                                                                                                                                                                                                        name: s._(
                                                                                                                                                                                                          /*BTDS*/ "",
                                                                                                                                                                                                        ),
                                                                                                                                                                                                      }
                                                                                                                                                                                                    : e ===
                                                                                                                                                                                                        "list_claimable_ad_accounts"
                                                                                                                                                                                                      ? {
                                                                                                                                                                                                          description:
                                                                                                                                                                                                            s._(
                                                                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                                                                            ),
                                                                                                                                                                                                          name: s._(
                                                                                                                                                                                                            /*BTDS*/ "",
                                                                                                                                                                                                          ),
                                                                                                                                                                                                        }
                                                                                                                                                                                                      : e ===
                                                                                                                                                                                                          "get_destination_portfolios"
                                                                                                                                                                                                        ? {
                                                                                                                                                                                                            description:
                                                                                                                                                                                                              s._(
                                                                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                                                                              ),
                                                                                                                                                                                                            name: s._(
                                                                                                                                                                                                              /*BTDS*/ "",
                                                                                                                                                                                                            ),
                                                                                                                                                                                                          }
                                                                                                                                                                                                        : e ===
                                                                                                                                                                                                            "check_page_claimability"
                                                                                                                                                                                                          ? {
                                                                                                                                                                                                              description:
                                                                                                                                                                                                                s._(
                                                                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                                                                ),
                                                                                                                                                                                                              name: s._(
                                                                                                                                                                                                                /*BTDS*/ "",
                                                                                                                                                                                                              ),
                                                                                                                                                                                                            }
                                                                                                                                                                                                          : e ===
                                                                                                                                                                                                              "maiba_gp8_get_asset_create_context"
                                                                                                                                                                                                            ? {
                                                                                                                                                                                                                description:
                                                                                                                                                                                                                  s._(
                                                                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                                                                  ),
                                                                                                                                                                                                                name: s._(
                                                                                                                                                                                                                  /*BTDS*/ "",
                                                                                                                                                                                                                ),
                                                                                                                                                                                                              }
                                                                                                                                                                                                            : e ===
                                                                                                                                                                                                                "maiba_gp8_get_page_ig_connect_context"
                                                                                                                                                                                                              ? {
                                                                                                                                                                                                                  description:
                                                                                                                                                                                                                    s._(
                                                                                                                                                                                                                      /*BTDS*/ "",
                                                                                                                                                                                                                    ),
                                                                                                                                                                                                                  name: s._(
                                                                                                                                                                                                                    /*BTDS*/ "",
                                                                                                                                                                                                                  ),
                                                                                                                                                                                                                }
                                                                                                                                                                                                              : null;
    }
    ((l.MAIBAToolActivityHeaderIndexProvider = p),
      (l.getMAIBAToolActivityHeaderIndexes = f),
      (l.useMAIBAToolActivityHeader = g),
      (l.getMAIBAToolActivityCopy = h));
  },
  226,
);
