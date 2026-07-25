"use client";

import { useState } from "react";
import {
  X,
  Search,
  ChevronRight,
  ChevronDown,
  SlidersHorizontal,
  MapPin,
  Flag,
  UserRound,
  Shirt,
  User,
} from "lucide-react";

const GENDER_OPTIONS = ["Call Girls", "Massages", "Male Escorts", "Transsexual", "Adult Meetings"];
const CITY_OPTIONS = ["All the cities", "Jaipur", "Delhi", "Mumbai", "Bengaluru", "Hyderabad"];
const NATIONALITY_OPTIONS = [
  { label: "Indian", emoji: "🇮🇳" },
  { label: "South African", emoji: "🇿🇦" },
  { label: "Senegalese", emoji: "🇸🇳" },
  { label: "Kenyan", emoji: "🇰🇪" },
  { label: "Nigerian", emoji: "🇳🇬" },
  { label: "Ghanaian", emoji: "🇬🇭" },
  { label: "Ethiopian", emoji: "🇪🇹" },
  { label: "Ugandan", emoji: "🇺🇬" },
  { label: "Tanzanian", emoji: "🇹🇿" },
  { label: "Moroccan", emoji: "🇲🇦" },
  { label: "Egyptian", emoji: "🇪🇬" },
  { label: "Zimbabwean", emoji: "🇿🇼" },
];
const NATIONALITY_PREVIEW_COUNT = 4;
const HAIR_OPTIONS = ["Blond Hair", "Brown Hair", "Black Hair", "Red Hair"];
const BODY_TYPE_OPTIONS = ["Slim", "Curvy"];
const ATTENTION_TO_OPTIONS = ["Men", "Women", "Couples", "Disabled"];
const PLACE_OF_SERVICE_OPTIONS = ["At home", "Events and parties", "Hotel / Motel", "Clubs", "Outcall"];

const FILTER_ROWS = [
  { key: "nationality", label: "Nationality", icon: Flag },
  { key: "hair", label: "Hair", icon: UserRound },
  { key: "bodyType", label: "Body type", icon: Shirt },
  { key: "attentionTo", label: "Attention to", icon: User },
  { key: "placeOfService", label: "Place of service", icon: MapPin },
];

export default function SearchFilterModal({ open, onClose, onSearch }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState(CITY_OPTIONS[0]);
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState(GENDER_OPTIONS[0]);
  const [nationalities, setNationalities] = useState([]);
  const [showAllNationalities, setShowAllNationalities] = useState(false);
  const [hair, setHair] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [attentionTo, setAttentionTo] = useState([]);
  const [placeOfService, setPlaceOfService] = useState([]);
  const [openRow, setOpenRow] = useState("nationality");

  if (!open) return null;

  const toggleNationality = (label) => {
    setNationalities((prev) =>
      prev.includes(label) ? prev.filter((n) => n !== label) : [...prev, label]
    );
  };

  const toggleHair = (tag) => {
    setHair((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleBodyType = (tag) => {
    setBodyType((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleAttentionTo = (tag) => {
    setAttentionTo((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const togglePlaceOfService = (tag) => {
    setPlaceOfService((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetAll = () => {
    setName("");
    setCity(CITY_OPTIONS[0]);
    setRegion("");
    setGender(GENDER_OPTIONS[0]);
    setNationalities([]);
    setShowAllNationalities(false);
    setHair([]);
    setBodyType([]);
    setAttentionTo([]);
    setPlaceOfService([]);
  };

  const handleSearch = () => {
    onSearch?.({
      name, city, region, gender,
      nationalities, hair, bodyType, attentionTo, placeOfService,
    });
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-slate-900/60 px-4 py-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div className="flex items-center gap-2.5">
            <Search className="h-6 w-6 text-slate-800" strokeWidth={2.5} />
            <h2 className="text-2xl font-bold text-slate-900">Search</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid h-10 w-10 place-items-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="px-8 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3.5 text-base font-medium text-slate-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            >
              {GENDER_OPTIONS.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Search by name or interest…"
              className="rounded-xl border border-slate-300 px-4 py-3.5 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3.5 text-base font-medium text-slate-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            >
              <option value="">Select region</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-3.5 text-base font-medium text-slate-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            >
              {CITY_OPTIONS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="pt-2">
            <p className="flex items-center gap-2 text-base font-bold text-slate-600">
              <SlidersHorizontal className="h-5 w-5" strokeWidth={2.5} />
              Filters
            </p>

            <div className="mt-1 divide-y divide-slate-100">
              {FILTER_ROWS.map((row) => {
                const Icon = row.icon;
                const isOpen = openRow === row.key;
                return (
                  <div key={row.key}>
                    <button
                      type="button"
                      onClick={() => setOpenRow(isOpen ? null : row.key)}
                      className="flex w-full items-center gap-3 py-4 text-left text-base font-bold text-slate-900 hover:text-rose-600 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-slate-600" strokeWidth={2} />
                      <span className="flex-1">{row.label}</span>
                      {isOpen ? (
                        <ChevronDown className="h-5 w-5 text-rose-500" strokeWidth={2.5} />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-rose-500" strokeWidth={2.5} />
                      )}
                    </button>

                    {isOpen && (
                      <div className="pb-5">
                        {row.key === "nationality" && (
                          <div>
                            <div className="flex flex-wrap gap-2.5">
                              {(showAllNationalities
                                ? NATIONALITY_OPTIONS
                                : NATIONALITY_OPTIONS.slice(0, NATIONALITY_PREVIEW_COUNT)
                              ).map((opt) => (
                                <button
                                  key={opt.label}
                                  type="button"
                                  onClick={() => toggleNationality(opt.label)}
                                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                    nationalities.includes(opt.label)
                                      ? "border-transparent bg-gradient-to-r from-rose-500 to-violet-600 text-white"
                                      : "border-slate-200 text-slate-700 hover:border-rose-300"
                                  }`}
                                >
                                  <span>{opt.emoji}</span>
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                            {NATIONALITY_OPTIONS.length > NATIONALITY_PREVIEW_COUNT && (
                              <button
                                type="button"
                                onClick={() => setShowAllNationalities((v) => !v)}
                                className="mt-3 text-sm font-bold text-slate-900 hover:text-rose-600"
                              >
                                {showAllNationalities ? "− Show less" : "+ Show all"}
                              </button>
                            )}
                          </div>
                        )}

                        {row.key === "hair" && (
                          <div className="flex flex-wrap gap-2.5">
                            {HAIR_OPTIONS.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => toggleHair(tag)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                  hair.includes(tag)
                                    ? "border-transparent bg-gradient-to-r from-rose-500 to-violet-600 text-white"
                                    : "border-slate-200 text-slate-700 hover:border-rose-300"
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        )}

                        {row.key === "bodyType" && (
                          <div className="flex flex-wrap gap-2.5">
                            {BODY_TYPE_OPTIONS.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => toggleBodyType(tag)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                  bodyType.includes(tag)
                                    ? "border-transparent bg-gradient-to-r from-rose-500 to-violet-600 text-white"
                                    : "border-slate-200 text-slate-700 hover:border-rose-300"
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        )}

                        {row.key === "attentionTo" && (
                          <div className="flex flex-wrap gap-2.5">
                            {ATTENTION_TO_OPTIONS.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => toggleAttentionTo(tag)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                  attentionTo.includes(tag)
                                    ? "border-transparent bg-gradient-to-r from-rose-500 to-violet-600 text-white"
                                    : "border-slate-200 text-slate-700 hover:border-rose-300"
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        )}

                        {row.key === "placeOfService" && (
                          <div className="flex flex-wrap gap-2.5">
                            {PLACE_OF_SERVICE_OPTIONS.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => togglePlaceOfService(tag)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                  placeOfService.includes(tag)
                                    ? "border-transparent bg-gradient-to-r from-rose-500 to-violet-600 text-white"
                                    : "border-slate-200 text-slate-700 hover:border-rose-300"
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-8 py-5">
          <button
            type="button"
            onClick={resetAll}
            className="text-base font-bold text-rose-600 hover:text-rose-700"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={handleSearch}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-violet-600 px-8 py-3.5 text-base font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            <Search className="h-5 w-5" strokeWidth={2.5} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
