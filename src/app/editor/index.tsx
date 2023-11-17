"use client";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";
import "@arco-themes/react-easy-email-theme/css/arco.css";
import {
  EmailEditor,
  EmailEditorProvider,
  IEmailTemplate,
} from "@/_components/easy-email/easy-email-editor";
import {
  ExtensionProps,
  StandardLayout,
} from "easy-email-extensions";
import { AdvancedType } from "easy-email-core";
const defaultTemplate: IEmailTemplate = {
  subject: "asddasddfs",
  subTitle: "asddasddfs",
  content: {
    type: "page",
    data: {
      value: {
        breakpoint: "480px",
        headAttributes: "",
        "font-weight": "normal",
        "font-size": "15px",
        "line-height": "1.8",
        headStyles: [],
        fonts: [],
        responsive: true,
        "font-family": "'Lato', sans-serif",
        "text-color": "#000000",
        "content-background-color": "#fafafa",
      },
    },
    attributes: {
      "background-color": "#efeeea",
      width: "600px",
    },
    children: [
      {
        type: "wrapper",
        data: {
          value: {},
        },
        attributes: {
          padding: "20px 0px 20px 0px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
        },
        children: [
          {
            type: "section",
            data: {
              value: {
                noWrap: false,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "column",
                data: {
                  value: {},
                },
                attributes: {
                  padding: "0px 0px 0px 0px",
                  border: "none",
                  "vertical-align": "top",
                },
                children: [
                  {
                    type: "text",
                    data: {
                      value: {
                        content: "Real Estate",
                      },
                    },
                    attributes: {
                      padding: "10px 25px 10px 25px",
                      align: "center",
                      "font-size": "30px",
                      "font-family": "'Playfair Display', sans-serif",
                      "font-weight": "700",
                    },
                    children: [],
                  },
                  {
                    type: "divider",
                    data: {
                      value: {},
                    },
                    attributes: {
                      align: "center",
                      "border-width": "1px",
                      "border-style": "solid",
                      "border-color": "#807878",
                      padding: "10px 0px",
                    },
                    children: [],
                  },
                  {
                    type: "navbar",
                    data: {
                      value: {
                        links: [
                          {
                            href: "/gettings-started-onboard",
                            content: "HOME",
                            color: "#000000",
                            "font-size": "13px",
                            target: "_blank",
                            padding: "15px 10px 15px 10px",
                          },
                          {
                            href: "/try-it-live",
                            content: "PROPERTIES",
                            color: "#000000",
                            "font-size": "13px",
                            target: "_blank",
                            padding: "15px 10px 15px 10px",
                          },
                          {
                            href: "/templates",
                            content: "CONTACT",
                            color: "#000000",
                            "font-size": "13px",
                            target: "_blank",
                            padding: "15px 10px 15px 10px",
                          },
                        ],
                      },
                    },
                    attributes: {
                      align: "center",
                      "base-url": "https://mjml.io",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            type: "hero",
            data: {
              value: {},
            },
            attributes: {
              "background-color": "#ffffff",
              "background-position": "center center",
              mode: "fluid-height",
              padding: "100px 0px 100px 0px",
              "vertical-align": "top",
              "background-url":
                "https://assets.maocanhua.cn/92a8e4ce-499a-4b7e-a0c6-38265f9589f2-image.png",
            },
            children: [
              {
                type: "text",
                data: {
                  value: {
                    content: "Real Estate",
                  },
                },
                attributes: {
                  padding: "10px 25px 10px 25px",
                  align: "center",
                  color: "#ffffff",
                  "font-size": "45px",
                  "line-height": "45px",
                },
                children: [],
              },
              {
                type: "text",
                data: {
                  value: {
                    content:
                      "A small river named Duden flows by their&nbsp;<div>place and supplies it with the necessary&nbsp;</div><div>regelialia.<br></div>",
                  },
                },
                attributes: {
                  align: "center",
                  "background-color": "#414141",
                  color: "#ffffff",
                  "font-weight": "normal",
                  "border-radius": "3px",
                  padding: "10px 25px 10px 25px",
                  "inner-padding": "10px 25px 10px 25px",
                  "line-height": "1.5",
                  target: "_blank",
                  "vertical-align": "middle",
                  border: "none",
                  "text-align": "center",
                  href: "#",
                  "font-size": "14px",
                },
                children: [],
              },
              {
                type: "button",
                data: {
                  value: {
                    content: "Browse Properties",
                  },
                },
                attributes: {
                  align: "center",
                  "background-color": "#feb062",
                  color: "#ffffff",
                  "font-size": "13px",
                  "font-weight": "normal",
                  "border-radius": "5px",
                  padding: "10px 25px 10px 25px",
                  "inner-padding": "10px 25px 10px 25px",
                  "line-height": "120%",
                  target: "_blank",
                  "vertical-align": "middle",
                  border: "none",
                  "text-align": "center",
                  href: "#",
                },
                children: [],
              },
            ],
          },
          {
            type: "section",
            data: {
              value: {
                noWrap: false,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "column",
                data: {
                  value: {},
                },
                attributes: {
                  padding: "0px 0px 0px 0px",
                  border: "none",
                  "vertical-align": "top",
                },
                children: [
                  {
                    type: "text",
                    data: {
                      value: {
                        content: "Buy House in Best Price",
                      },
                    },
                    attributes: {
                      padding: "10px 25px 10px 25px",
                      align: "center",
                      "font-size": "34px",
                      "font-weight": "300",
                    },
                    children: [],
                  },
                  {
                    type: "text",
                    data: {
                      value: {
                        content:
                          "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
                      },
                    },
                    attributes: {
                      padding: "10px 25px 10px 25px",
                      align: "center",
                      "font-size": "",
                      color: "#807878",
                    },
                    children: [],
                  },
                  {
                    type: "button",
                    data: {
                      value: {
                        content: "Browse Properties",
                      },
                    },
                    attributes: {
                      align: "center",
                      "background-color": "#000",
                      color: "#ffffff",
                      "font-weight": "normal",
                      "border-radius": "0px",
                      padding: "10px 25px 10px 25px",
                      "inner-padding": "10px 25px 10px 25px",
                      "line-height": "120%",
                      target: "_blank",
                      "vertical-align": "middle",
                      border: "none",
                      "text-align": "center",
                      href: "#",
                      "font-size": "12px",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "wrapper",
        data: {
          value: {},
        },
        attributes: {
          padding: "20px 25px 20px 25px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#fafafa",
        },
        children: [
          {
            type: "section",
            data: {
              value: {
                noWrap: false,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "column",
                data: {
                  value: {},
                },
                attributes: {
                  padding: "0px 0px 0px 0px",
                  border: "none",
                  "vertical-align": "top",
                },
                children: [
                  {
                    type: "text",
                    data: {
                      value: {
                        content: "Our Services",
                      },
                    },
                    attributes: {
                      padding: "10px 25px 10px 25px",
                      align: "center",
                      "font-size": "28px",
                      "line-height": "1.4",
                      "font-weight": "400",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            type: "section",
            data: {
              value: {
                noWrap: true,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "group",
                data: {
                  value: {},
                },
                attributes: {
                  "vertical-align": "top",
                  direction: "ltr",
                },
                children: [
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/2d1f8c3a-6c54-428a-9300-e171131001bd-image.png",
                          width: "100px",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Layout",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content:
                              "Far far away, behind the word mountains, far from the countries",
                          },
                        },
                        attributes: {
                          padding: "10px 0px 10px 0px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/0697f2b4-791a-4dc6-822d-59c6abec0faf-image.png",
                          width: "100px",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Design",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content:
                              "Far far away, behind the word mountains, far from the countries",
                          },
                        },
                        attributes: {
                          padding: "10px 0px 10px 0px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "wrapper",
        data: {
          value: {},
        },
        attributes: {
          padding: "20px 25px 20px 25px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#fafafa",
        },
        children: [
          {
            type: "section",
            data: {
              value: {
                noWrap: false,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "column",
                data: {
                  value: {},
                },
                attributes: {
                  padding: "0px 0px 0px 0px",
                  border: "none",
                  "vertical-align": "top",
                },
                children: [
                  {
                    type: "text",
                    data: {
                      value: {
                        content: "Properties For Sale",
                      },
                    },
                    attributes: {
                      padding: "10px 25px 10px 25px",
                      align: "center",
                      "font-size": "28px",
                      "line-height": "1.4",
                      "font-weight": "400",
                    },
                    children: [],
                  },
                  {
                    type: "text",
                    data: {
                      value: {
                        content:
                          "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                      },
                    },
                    attributes: {
                      padding: "10px 25px 10px 25px",
                      align: "center",
                      "font-size": "",
                      color: "#807878",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            type: "section",
            data: {
              value: {
                noWrap: true,
              },
            },
            attributes: {
              padding: "0px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "group",
                data: {
                  value: {},
                },
                attributes: {
                  "vertical-align": "top",
                  direction: "ltr",
                },
                children: [
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "1px solid #ccc",
                      "vertical-align": "top",
                      width: "48%",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/c2fa56dd-c6d0-4dce-9aa5-d1de563320aa-image.png",
                          width: "",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Residential House",
                          },
                        },
                        attributes: {
                          padding: "10px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "100 sqft 2 Bed 2 bath",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 10px 0px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "$1,000,000",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content:
                              "Far far away, behind the word mountains, far from the countries",
                          },
                        },
                        attributes: {
                          padding: "10px 5px 10px 5px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                      width: "4%",
                    },
                    children: [],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "1px solid #ccc",
                      "vertical-align": "top",
                      width: "48%",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/8c8cca3a-d9c1-4ae4-bf49-1a0deca44c56-image.png",
                          width: "",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Residential House",
                          },
                        },
                        attributes: {
                          padding: "10px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "100 sqft 2 Bed 2 bath",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 10px 0px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "$1,000,000",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content:
                              "Far far away, behind the word mountains, far from the countries",
                          },
                        },
                        attributes: {
                          padding: "10px 5px 10px 5px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "section",
            data: {
              value: {
                noWrap: true,
              },
            },
            attributes: {
              padding: "0px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "group",
                data: {
                  value: {},
                },
                attributes: {
                  "vertical-align": "top",
                  direction: "ltr",
                },
                children: [
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "1px solid #ccc",
                      "vertical-align": "top",
                      width: "48%",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/48d19e31-449f-453c-8c21-a10410575723-image.png",
                          width: "",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Residential House",
                          },
                        },
                        attributes: {
                          padding: "10px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "100 sqft 2 Bed 2 bath",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 10px 0px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "$1,000,000",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content:
                              "Far far away, behind the word mountains, far from the countries",
                          },
                        },
                        attributes: {
                          padding: "10px 5px 10px 5px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                      width: "4%",
                    },
                    children: [],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "1px solid #ccc",
                      "vertical-align": "top",
                      width: "48%",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/214fa0fd-afec-483f-a134-cb78305cad72-image.png",
                          width: "",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Residential House",
                          },
                        },
                        attributes: {
                          padding: "10px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "100 sqft 2 Bed 2 bath",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 10px 0px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "$1,000,000",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "18px",
                          "font-weight": "400",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content:
                              "Far far away, behind the word mountains, far from the countries",
                          },
                        },
                        attributes: {
                          padding: "10px 5px 10px 5px",
                          align: "center",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "wrapper",
        data: {
          value: {},
        },
        attributes: {
          padding: "0px 0px 0px 0px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
        },
        children: [
          {
            type: "section",
            data: {
              value: {
                noWrap: true,
              },
            },
            attributes: {
              padding: "75px 0px 75px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
              "background-url":
                "https://assets.maocanhua.cn/ee1b8e88-a691-4ce5-ae45-b5b560f6cd13-image.png",
            },
            children: [
              {
                type: "group",
                data: {
                  value: {},
                },
                attributes: {
                  "vertical-align": "top",
                  direction: "ltr",
                },
                children: [
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "200",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 25px",
                          align: "center",
                          "font-size": "34px",
                          "font-weight": "700",
                          color: "#ffffff",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Agents",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "center",
                          "font-size": "16px",
                          color: "#ffffff",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "1200",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "center",
                          "font-size": "34px",
                          "font-weight": "700",
                          color: "#ffffff",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "happy Clients",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "center",
                          "font-size": "16px",
                          color: "#ffffff",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "1000",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "center",
                          "font-size": "34px",
                          "font-weight": "700",
                          color: "#ffffff",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Sold Properties",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "center",
                          "font-size": "16px",
                          color: "#ffffff",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "wrapper",
        data: {
          value: {},
        },
        attributes: {
          padding: "25px 25px 0px 25px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
        },
        children: [
          {
            type: "section",
            data: {
              value: {
                noWrap: true,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "group",
                data: {
                  value: {},
                },
                attributes: {
                  "vertical-align": "top",
                  direction: "ltr",
                },
                children: [
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Our Features",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 26px 0px",
                          align: "left",
                          "font-size": "28px",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Our Features",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "left",
                          "font-size": "18px",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "A small river named Duden flows by their",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 20px 0px",
                          align: "left",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Modern Design",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "left",
                          "font-size": "18px",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "A small river named Duden flows by their",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 20px 0px",
                          align: "left",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Minimal Design",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 0px",
                          align: "left",
                          "font-size": "18px",
                        },
                        children: [],
                      },
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "A small river named Duden flows by their",
                          },
                        },
                        attributes: {
                          padding: "0px 25px 0px 0px",
                          align: "left",
                          "font-size": "",
                          color: "#807878",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "top",
                    },
                    children: [
                      {
                        type: "image",
                        data: {
                          value: {},
                        },
                        attributes: {
                          align: "center",
                          height: "auto",
                          padding: "0px 0px 0px 0px",
                          src: "https://assets.maocanhua.cn/e49e99e4-e1a4-4a14-a3f2-885e7279a4d2-image.png",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "section",
            data: {
              value: {
                noWrap: false,
              },
            },
            attributes: {
              padding: "20px 0px 20px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "column",
                data: {
                  value: {},
                },
                attributes: {
                  padding: "0px 0px 0px 0px",
                  border: "none",
                  "vertical-align": "top",
                },
                children: [
                  {
                    type: "button",
                    data: {
                      value: {
                        content: "Start Browsing",
                      },
                    },
                    attributes: {
                      align: "center",
                      "background-color": "transparent",
                      color: "#000000",
                      "font-weight": "700",
                      "border-radius": "0px",
                      padding: "10px 25px 10px 25px",
                      "inner-padding": "10px 25px 10px 25px",
                      "line-height": "120%",
                      target: "_blank",
                      "vertical-align": "middle",
                      border: "2px solid #000",
                      "text-align": "center",
                      href: "#",
                      "font-size": "",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "wrapper",
        data: {
          value: {},
        },
        attributes: {
          padding: "0px 0px 0px 0px",
          border: "none",
          direction: "ltr",
          "text-align": "center",
        },
        children: [
          {
            type: "section",
            data: {
              value: {
                noWrap: false,
              },
            },
            attributes: {
              padding: "0px 0px 0px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "column",
                data: {
                  value: {},
                },
                attributes: {
                  padding: "0px 0px 0px 0px",
                  border: "none",
                  "vertical-align": "top",
                },
                children: [
                  {
                    type: "divider",
                    data: {
                      value: {},
                    },
                    attributes: {
                      align: "center",
                      "border-width": "1px",
                      "border-style": "solid",
                      "border-color": "#807878",
                      padding: "10px 0px",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            type: "section",
            data: {
              value: {
                noWrap: true,
              },
            },
            attributes: {
              padding: "0px 0px 0px 0px",
              "background-repeat": "repeat",
              "background-size": "auto",
              "background-position": "top center",
              border: "none",
              direction: "ltr",
              "text-align": "center",
            },
            children: [
              {
                type: "group",
                data: {
                  value: {},
                },
                attributes: {
                  "vertical-align": "top",
                  direction: "ltr",
                },
                children: [
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 0px 0px 0px",
                      border: "none",
                      "vertical-align": "middle",
                      width: "60%",
                    },
                    children: [
                      {
                        type: "text",
                        data: {
                          value: {
                            content: "Stay Updated On Newest Properties",
                          },
                        },
                        attributes: {
                          padding: "0px 0px 0px 15px",
                          align: "left",
                          "font-size": "20px",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    type: "column",
                    data: {
                      value: {},
                    },
                    attributes: {
                      padding: "0px 15px 0px 0px",
                      border: "none",
                      "vertical-align": "middle",
                      width: "40%",
                    },
                    children: [
                      {
                        type: "social",
                        data: {
                          value: {
                            elements: [
                              {
                                href: "#",
                                "icon-size": "20px",
                                target: "_blank",
                                src: "https://assets.maocanhua.cn/5738124c-7dd0-4cde-9f24-dc713423ee36-image.png",
                                content: "",
                              },
                              {
                                href: "#",
                                "icon-size": "20px",
                                target: "_blank",
                                src: "https://assets.maocanhua.cn/fcce8406-c946-4ac5-a0cd-3982473be3e3-image.png",
                                content: "",
                              },
                              {
                                href: "",
                                "icon-size": "20px",
                                target: "_blank",
                                src: "https://assets.maocanhua.cn/2b845c8b-30d2-4326-a11f-48848dbadf7c-image.png",
                                content: "",
                              },
                            ],
                          },
                        },
                        attributes: {
                          align: "right",
                          color: "#333333",
                          mode: "horizontal",
                          "font-size": "13px",
                          "font-weight": "normal",
                          "border-radius": "3px",
                          padding: "0px10px 0px 10px 0px",
                          "inner-padding": "4px 4px 4px 4px",
                          "line-height": "22px",
                          "text-padding": "4px 4px 4px 0px",
                          "icon-padding": "0px",
                          "icon-size": "20px",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "section",
        data: {
          value: {
            noWrap: false,
          },
        },
        attributes: {
          padding: "0px 0px 0px 0px",
          "background-repeat": "repeat",
          "background-size": "auto",
          "background-position": "top center",
          border: "none",
          direction: "ltr",
          "text-align": "center",
          "background-color": "#fafafa",
        },
        children: [
          {
            type: "column",
            data: {
              value: {},
            },
            attributes: {
              padding: "0px 0px 0px 0px",
              border: "none",
              "vertical-align": "top",
            },
            children: [
              {
                type: "text",
                data: {
                  value: {
                    content:
                      'No longer want to receive these email? You can <a href="#" target="_blank" style="text-decoration: none;"><font color="#2c2a2a">Unsubscribe here</font></a>',
                  },
                },
                attributes: {
                  padding: "10px 25px 10px 25px",
                  align: "center",
                  "font-size": "",
                  color: "#807878",
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
};
const defaultCategories: ExtensionProps["categories"] = [
  {
    label: "Content",
    active: true,
    blocks: [
      {
        type: AdvancedType.TEXT,
      },
      {
        type: AdvancedType.IMAGE,
        payload: { attributes: { padding: "0px 0px 0px 0px" } },
      },
      {
        type: AdvancedType.BUTTON,
      },
      {
        type: AdvancedType.SOCIAL,
      },
      {
        type: AdvancedType.DIVIDER,
      },
      {
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
      },
    ],
  },
  {
    label: "Layout",
    active: true,
    displayType: "column",
    blocks: [
      {
        title: "2 columns",
        payload: [
          ["50%", "50%"],
          ["33%", "67%"],
          ["67%", "33%"],
          ["25%", "75%"],
          ["75%", "25%"],
        ],
      },
      {
        title: "3 columns",
        payload: [
          ["33.33%", "33.33%", "33.33%"],
          ["25%", "25%", "50%"],
          ["50%", "25%", "25%"],
        ],
      },
      {
        title: "4 columns",
        payload: [["25%", "25%", "25%", "25%"]],
      },
    ],
  },
];
export const testMergeTags = {
  user: {
    name: "Ryan",
    age: 26,
    avatar:
      "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841428/pnmyosjz0x0kmqlfxhrp.png",
    email: "easy-email@gmail.com",
    project: "Easy email",
  },
  date: {
    today: new Date().toDateString(),
  },
  emptyList: [],
  product_list: [
    {
      id: 0,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841462/l2hayusrfwffltdc105o.png",
      title: "Slim Fit Printed shirt",
      price: "$59.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app",
    },
    {
      id: 1,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841503/uxkaqveakixnt5nvhnyf.png",
      title: "Casual Collar Youth Handsome",
      price: "$39.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app",
    },
    {
      id: 2,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841540/gc0dec0hisoyp0t2hgaf.png",
      title: "Shirt Business Casual",
      price: "$49.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app",
    },
    {
      id: 3,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841462/l2hayusrfwffltdc105o.png",
      title: "Slim Fit Printed shirt",
      price: "$59.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app",
    },
    {
      id: 4,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841503/uxkaqveakixnt5nvhnyf.png",
      title: "Casual Collar Youth Handsome",
      price: "$39.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app",
    },
    {
      id: 5,
      image:
        "http://res.cloudinary.com/dwkp0e1yo/image/upload/v1665841540/gc0dec0hisoyp0t2hgaf.png",
      title: "Shirt Business Casual",
      price: "$49.99 HKD",
      url: "https://easy-email-m-ryan.vercel.app",
    },
  ],
  company: {
    name: "Easy email",
    member_list: [
      {
        id: 1,
        name: "James",
        hobby: "Swimming",
        age: 28,
        product_list: [
          {
            id: 0,
            image:
              "https://assets.maocanhua.cn/da9b173d-b272-4101-aa25-4635ed95e9e3-image.png",
            title: "Slim Fit Printed shirt",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
          {
            id: 1,
            image:
              "https://assets.maocanhua.cn/4ef7cb65-ee1f-4b12-832c-17ab07a8b9ac-image.png",
            title: "Casual Collar Youth Handsome Slim Print Blazer",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
          {
            id: 2,
            image:
              "https://assets.maocanhua.cn/88fe9bfa-547f-4d5e-9ba5-ac6b91572dde-image.png",
            title: "Shirt Business Casual",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
        ],
      },
      {
        id: 2,
        name: "Nick",
        hobby: "Coding",
        age: 29,
        product_list: [
          {
            id: 0,
            image:
              "https://assets.maocanhua.cn/da9b173d-b272-4101-aa25-4635ed95e9e3-image.png",
            title: "Slim Fit Printed shirt",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
          {
            id: 1,
            image:
              "https://assets.maocanhua.cn/4ef7cb65-ee1f-4b12-832c-17ab07a8b9ac-image.png",
            title: "Casual Collar Youth Handsome Slim Print Blazer",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
          {
            id: 2,
            image:
              "https://assets.maocanhua.cn/88fe9bfa-547f-4d5e-9ba5-ac6b91572dde-image.png",
            title: "Shirt Business Casual",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
        ],
      },
      {
        id: 3,
        name: "Robert",
        hobby: "skiing",
        age: 30,
        product_list: [
          {
            id: 0,
            image:
              "https://assets.maocanhua.cn/da9b173d-b272-4101-aa25-4635ed95e9e3-image.png",
            title: "Slim Fit Printed shirt",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
          {
            id: 1,
            image:
              "https://assets.maocanhua.cn/4ef7cb65-ee1f-4b12-832c-17ab07a8b9ac-image.png",
            title: "Casual Collar Youth Handsome Slim Print Blazer",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
          {
            id: 2,
            image:
              "https://assets.maocanhua.cn/88fe9bfa-547f-4d5e-9ba5-ac6b91572dde-image.png",
            title: "Shirt Business Casual",
            price: "$59.99 HKD",
            url: "https://easy-email-m-ryan.vercel.app",
          },
        ],
      },
    ],
  },
};

export default function App() {
  const [template, setTemplate] = useState<IEmailTemplate | null>(null);
  const { width } = useWindowSize();

  const smallScene = width < 1400;

  useEffect(() => {
    setTemplate(defaultTemplate);
  }, []);

  if (!template) return <p>Loading</p>;

  return (
    <EmailEditorProvider
      data={defaultTemplate}
      height={"calc(100vh - 72px)"}
      autoComplete
      dashed={false}
    >
      {({ values }) => {
        return (
          <StandardLayout
            compact={!smallScene}
            showSourceCode={true}
            categories={defaultCategories}
          >
            <EmailEditor />
          </StandardLayout>
        );
      }}
    </EmailEditorProvider>
  );
}
export function pushEvent(params: {
  event: string;
  payload?: Record<string, any>;
}) {
  const dataLayer = (window as any).dataLayer as any[];
  if (!dataLayer) return;

  dataLayer.push({
    event: params.event,
    payload: params.payload,
  });
}
