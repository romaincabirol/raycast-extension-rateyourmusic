import { List, ActionPanel, open, Action, Icon } from "@raycast/api";
import { useState } from "react";

export default function SearchRateYourMusic() {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"artist" | "release">("artist");

  return (
    <List
      searchBarPlaceholder="Search RateYourMusic..."
      onSearchTextChange={setQuery}
      searchBarAccessory={
        <List.Dropdown
          tooltip="Select Type"
          value={selectedType}
          onChange={(newValue) => setSelectedType(newValue as "artist" | "release")}
        >
          <List.Dropdown.Item title="Artist" value="artist" />
          <List.Dropdown.Item title="Release" value="release" />
        </List.Dropdown>
      }
    >
      <List.Item
        title={`Search for "${query}" as ${selectedType}`}
        actions={
          <ActionPanel>
            <Action
              title="Search on RateYourMusic"
              onAction={() => {
                const searchTypeParam = selectedType === "artist" ? "a" : "l";
                const url = `https://rateyourmusic.com/search?searchterm=${encodeURIComponent(query)}&searchtype=${searchTypeParam}`;
                open(url);
              }}
              icon={Icon.MagnifyingGlass}
            />
          </ActionPanel>
        }
      />
    </List>
  );
}
