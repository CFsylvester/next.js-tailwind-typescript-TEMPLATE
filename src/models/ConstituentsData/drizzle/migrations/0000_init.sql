CREATE TYPE "public"."constituent_type" AS ENUM('Individual', 'Entity', 'Organization');--> statement-breakpoint
CREATE TYPE "public"."preferred_contact_method" AS ENUM('email', 'phone', 'sms');--> statement-breakpoint
CREATE TABLE "industry_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "industry_groups_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "organizations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "organizations_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "tags_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"date" timestamp
);
--> statement-breakpoint
CREATE TABLE "constituents" (
	"email" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"phone" text,
	"full_address" text,
	"dob" timestamp,
	"organization_id" integer,
	"industry_group_id" integer,
	"verified" boolean DEFAULT false,
	"constituent_type" "constituent_type",
	"total_donations" numeric,
	"average_donation" numeric,
	"donates_anonymously" boolean DEFAULT false,
	"donation_history" text,
	"last_contacted" timestamp,
	"last_active" timestamp,
	"touchpoint_frequency" text,
	"language_preference" text,
	"preferred_contact_method" "preferred_contact_method",
	"comms_opt_in" boolean DEFAULT true,
	"signup_datetime" timestamp
);
--> statement-breakpoint
CREATE TABLE "constituent_events" (
	"constituent_email" text NOT NULL,
	"event_id" integer NOT NULL,
	CONSTRAINT "constituent_events_constituent_email_event_id_pk" PRIMARY KEY("constituent_email","event_id")
);
--> statement-breakpoint
CREATE TABLE "constituent_tags" (
	"constituent_email" text NOT NULL,
	"tag_id" integer NOT NULL,
	CONSTRAINT "constituent_tags_constituent_email_tag_id_pk" PRIMARY KEY("constituent_email","tag_id")
);
--> statement-breakpoint
ALTER TABLE "constituents" ADD CONSTRAINT "constituents_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "constituents" ADD CONSTRAINT "constituents_industry_group_id_industry_groups_id_fk" FOREIGN KEY ("industry_group_id") REFERENCES "public"."industry_groups"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "constituent_events" ADD CONSTRAINT "constituent_events_constituent_email_constituents_email_fk" FOREIGN KEY ("constituent_email") REFERENCES "public"."constituents"("email") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "constituent_events" ADD CONSTRAINT "constituent_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "constituent_tags" ADD CONSTRAINT "constituent_tags_constituent_email_constituents_email_fk" FOREIGN KEY ("constituent_email") REFERENCES "public"."constituents"("email") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "constituent_tags" ADD CONSTRAINT "constituent_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;