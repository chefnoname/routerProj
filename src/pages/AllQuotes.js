import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: `Abu Mus'ab ash-Shaafi'i`,
    text: "Get a load of this guy...",
  },
  { id: "q2", author: `Ahmed an-Nahwi`, text: "Nigashiima! Nigashiima!" },
  { id: "q3", author: `King Soloman K`, text: "Habibi." },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
